import { readFile } from 'fs/promises';
import path from 'path';
import { fileURLToPath } from 'url';

export const read = async () => {
    // Write your code here 
    const __dirname = path.dirname(fileURLToPath(import.meta.url));
    try {
        const data = await readFile(path.join(__dirname, 'files', 'fileToRead.txt'), 'utf8');
        console.log(data);
    } catch (e) {
        if (e.code === 'ENOENT') throw Error('FS operation failed');
    }
};

read();