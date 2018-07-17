'use strict';

const shell = require('shelljs');

const PACKAGE_DIR = 'ng2-select';
const NPM_DIR = 'dist';
const CLEANUP_DIRS = [
    'demo',
    'gulp-tasks',
    'scripts',
    'src'
];

const cwd = shell.pwd();
if (cwd.length > PACKAGE_DIR.length && cwd.substr(cwd.length - PACKAGE_DIR.length) === PACKAGE_DIR) {
    // Remove everything except dist folder
    shell.rm('-Rf', ...CLEANUP_DIRS);
    shell.rm('-f', './*', './.*');

    // Move contents of dist folder to parent and remove dist folder
    shell.mv(`${NPM_DIR}/*`, './');
    shell.rm('-Rf', `${NPM_DIR}`);
}
