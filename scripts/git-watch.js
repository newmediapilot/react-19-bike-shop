import chokidar from 'chokidar';
import {globSync} from 'glob';
import {execSync} from 'child_process';

/**
 * Watches this directory and commits when changes occur
 * Ideal where commits will be squashed by PR
 */
const paths = globSync('./**/*.*', {
    platform: 'win32',
    nodir: true,
    ignore: [
        '.git/**',
        '.idea/**',
        'dist/**',
        'node_modules/**',
        'package-lock.json',
    ],
}).slice(1);

const commit = (path, event) => {
    try {
        execSync("git add .");
        execSync(`git commit -m "[gitwatch] autocommit (${event})@{${path} "`, {stdio: "inherit"});
        console.log(`[gitwatch] autocommit (${event})@{${path}}`);
    } catch {
        console.log(`[gitwatch] no changes`);
    }
};

let handler = (event) => (path) => {
    console.log(`[gitwatch] (${event})@{${path}}`);
    commit(path, event);
};

chokidar
    .watch(paths)
    .on('change', handler('change'));