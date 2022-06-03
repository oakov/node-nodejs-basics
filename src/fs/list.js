import { readdir } from 'fs/promises';
import path from 'path';
import { fileURLToPath } from 'url';

export const list = async () => {
    // Write your code here 
    const __dirname = path.dirname(fileURLToPath(import.meta.url));
    try {
        const files = await readdir(path.join(__dirname, 'files'));
        console.log(files);
    } catch (e) {
        if (e.code === 'ENOENT') throw Error('FS operation failed');
    }
};

list();