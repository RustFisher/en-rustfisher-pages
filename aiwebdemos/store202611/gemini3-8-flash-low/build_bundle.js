const fs = require('fs');

const core = fs.readFileSync('libs/three.core.js', 'utf8');
const orbit = fs.readFileSync('libs/OrbitControls.js', 'utf8');
const tween = fs.readFileSync('libs/tween.module.js', 'utf8');

const lastExportIndex = core.lastIndexOf('export {');
const coreNoExport = core.substring(0, lastExportIndex);
const exportsListStr = core.substring(lastExportIndex + 8, core.lastIndexOf('}'));
const exportNames = exportsListStr.split(',').map(s => s.trim()).filter(Boolean);

let bundle = '(function(global){\n';
bundle += coreNoExport + '\n';
bundle += 'global.THREE = {\n';
for (const name of exportNames) {
  if (name.includes(' as ')) {
    const parts = name.split(' as ');
    bundle += '  ' + parts[1].trim() + ': ' + parts[0].trim() + ',\n';
  } else {
    bundle += '  ' + name + ': ' + name + ',\n';
  }
}
bundle += '};\n';

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
    filteredOrbit.push('global.THREE.OrbitControls = OrbitControls;\nglobal.OrbitControls = OrbitControls;');
    continue;
  }
  filteredOrbit.push(line);
}

bundle += '\n// OrbitControls\n(function(){\n';
bundle += 'const { ' + importedSymbols.join(', ') + ' } = global.THREE;\n';
bundle += filteredOrbit.join('\n');
bundle += '\n})();\n';

// Clean TWEEN
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
console.log('Finished writing bundle.js, size:', bundle.length);
