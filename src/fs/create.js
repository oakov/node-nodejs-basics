import { writeFile } from 'fs/promises';
import path from 'path';
import { fileURLToPath } from 'url';

export const create = async () => {
    // Write your code here 
    const __dirname = path.dirname(fileURLToPath(import.meta.url));
    try {
        await writeFile(path.join(__dirname, 'files', 'fresh.txt'), 'I am fresh and young', { flag: 'ax' });
    } catch (e) {
        if (e.code === 'EEXIST') throw Error('FS operation failed');
    }
}

create();