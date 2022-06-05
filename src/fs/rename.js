import { rename as ren, stat } from 'fs/promises';
import path from 'path';
import { fileURLToPath } from 'url';

export const rename = async () => {
    // Write your code here 
    let exists;
    const __dirname = path.dirname(fileURLToPath(import.meta.url));
    try {
        exists = await stat(path.join(__dirname, 'files', 'properFilename.md'));
    } catch { }
    if (exists) throw Error('FS operation failed');
    try {
        await ren(path.join(__dirname, 'files', 'wrongFilename.txt'), path.join(__dirname, 'files', 'properFilename.md'));
    } catch (e) {
        if (e.code === 'ENOENT') throw Error('FS operation failed');
    }
};

rename();