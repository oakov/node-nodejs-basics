import { rm } from 'fs/promises';
import path from 'path';
import { fileURLToPath } from 'url';

export const remove = async () => {
    // Write your code here 
    const __dirname = path.dirname(fileURLToPath(import.meta.url));
    try {
        await rm(path.join(__dirname, 'files', 'fileToRemove.txt'));
    } catch (e) {
        if (e.code === 'ENOENT') throw Error('FS operation failed');
    }
};

remove();