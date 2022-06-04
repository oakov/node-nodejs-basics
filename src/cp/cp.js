import { spawn } from 'child_process';
import path from 'path';
import { fileURLToPath } from 'url';

export const spawnChildProcess = async (args) => {
    // Write your code here
    const __dirname = path.dirname(fileURLToPath(import.meta.url));
    const proc = spawn('node', [path.join(__dirname, 'files', 'script.js'), ...process.argv.slice(2)]);
    process.stdin.pipe(proc.stdin);
    proc.stdout.pipe(process.stdout);
};

spawnChildProcess();