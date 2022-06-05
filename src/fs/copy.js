import { mkdir, readdir, copyFile } from 'fs/promises';
import path from 'path';
import { fileURLToPath } from 'url';

export const copy = async () => {
    // Write your code here 
    const __dirname = path.dirname(fileURLToPath(import.meta.url));
    try {
        await mkdir(path.join(__dirname, 'files_copy'));
        const files = await readdir(path.join(__dirname, 'files'));
        for await (const file of files) {
            copyFile(path.join(__dirname, 'files', file), path.join(__dirname, 'files_copy', file));
        }
    } catch (e) {
        if (e.code === 'EEXIST' | e.code === 'ENOENT') throw Error('FS operation failed');
    }
};

copy();