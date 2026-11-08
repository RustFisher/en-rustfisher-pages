const fs = require('fs');

const core = fs.readFileSync('libs/three.core.js', 'utf8');
const mod = fs.readFileSync('libs/three.module.js', 'utf8');
const orbit = fs.readFileSync('libs/OrbitControls.js', 'utf8');
const tween = fs.readFileSync('libs/tween.module.js', 'utf8');

// 1. Process three.core.js
const coreLastExportIndex = core.lastIndexOf('export {');
const coreCode = core.substring(0, coreLastExportIndex);
const coreExportStr = core.substring(coreLastExportIndex + 8, core.lastIndexOf('}'));
const coreExports = coreExportStr.split(',').map(s => s.trim()).filter(Boolean);

// 2. Process three.module.js
// In three.module.js, strip ALL `import ... from './three.core.js';` and `export ... from './three.core.js';`
let modClean = mod.replace(/import\s*\{[\s\S]*?\}\s*from\s*['"]\.\/three\.core\.js['"];?/g, '');
modClean = modClean.replace(/export\s*\{[\s\S]*?\}\s*from\s*['"]\.\/three\.core\.js['"];?/g, '');

const modLastExportIndex = modClean.lastIndexOf('export {');
let modBody = modClean;
let modExports = [];
if (modLastExportIndex !== -1) {
  modBody = modClean.substring(0, modLastExportIndex);
  const modExportStr = modClean.substring(modLastExportIndex + 8, modClean.lastIndexOf('}'));
  modExports = modExportStr.split(',').map(s => s.trim()).filter(Boolean);
}

let bundle = '(function(global){\n';
bundle += 'const THREE = {};\n';
bundle += 'global.THREE = THREE;\n';

// Scope 1: Core
bundle += '(function(){\n';
bundle += coreCode + '\n';
for (const name of coreExports) {
  if (name.includes(' as ')) {
    const parts = name.split(' as ');
    bundle += '  THREE.' + parts[1].trim() + ' = ' + parts[0].trim() + ';\n';
  } else {
    bundle += '  THREE.' + name + ' = ' + name + ';\n';
  }
}
bundle += '})();\n';

// Scope 2: Module (Extract all symbols needed from THREE into scope)
bundle += '(function(){\n';
// Bring coreExports into scope
bundle += 'const {\n  ' + coreExports.map(n => n.includes(' as ') ? n.split(' as ')[1].trim() : n).join(',\n  ') + '\n} = THREE;\n';
bundle += modBody + '\n';
for (const name of modExports) {
  if (name.includes(' as ')) {
    const parts = name.split(' as ');
    bundle += '  THREE.' + parts[1].trim() + ' = ' + parts[0].trim() + ';\n';
  } else {
    bundle += '  THREE.' + name + ' = ' + name + ';\n';
  }
}
bundle += '})();\n';

// Scope 3: OrbitControls
let orbitLines = orbit.split('\n');
let filteredOrbit = [];
let insideImport = false;
let importedSymbols = [];

for (const line of orbitLines) {
  if (line.trim().startsWith('import {')) {
    insideImport = true;
    continue;
  }
  if (insideImport) {
    if (line.includes('} from')) {
      insideImport = false;
      continue;
    }
    const cleanSym = line.replace(/,/g, '').trim();
    if (cleanSym) importedSymbols.push(cleanSym);
    continue;
  }
  if (line.trim().startsWith('export { OrbitControls }')) {
    filteredOrbit.push('THREE.OrbitControls = OrbitControls;\nglobal.OrbitControls = OrbitControls;');
    continue;
  }
  filteredOrbit.push(line);
}

bundle += '\n// OrbitControls\n(function(){\n';
bundle += 'const { ' + importedSymbols.join(', ') + ' } = THREE;\n';
bundle += filteredOrbit.join('\n');
bundle += '\n})();\n';

// Scope 4: TWEEN
let tweenClean = tween;
const tweenExportIdx = tweenClean.lastIndexOf('export {');
if (tweenExportIdx !== -1) {
  tweenClean = tweenClean.substring(0, tweenExportIdx);
}
tweenClean += '\nglobal.TWEEN = exports;\n';

bundle += '\n// TWEEN\n(function(){\n';
bundle += tweenClean;
bundle += '\n})();\n';

bundle += '})(typeof window !== "undefined" ? window : globalThis);\n';

fs.writeFileSync('libs/bundle.js', bundle);
console.log('Finished writing modular bundle.js, total size:', bundle.length);
