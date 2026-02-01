const fs = require('fs');

try {
    const pt = fs.readFileSync('./messages/pt.json', 'utf8').split(/\r?\n/);
    const fix = fs.readFileSync('./security_fix.json', 'utf8');

    // Lines 1-1055 (indices 0-1054)
    const prefix = pt.slice(0, 1055);

    // Lines 1298-End (indices 1297...)
    const suffix = pt.slice(1297);

    const newContent = prefix.join('\n') + '\n' + fix + '\n' + suffix.join('\n');
    fs.writeFileSync('./messages/pt.json', newContent);
    console.log('Fixed pt.json');
} catch (e) {
    console.error(e);
}
