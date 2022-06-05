import { createReadStream } from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

export const read = async () => {
    // Write your code here 
    const __dirname = path.dirname(fileURLToPath(import.meta.url));
    const input = createReadStream(path.join(__dirname, 'files', 'fileToRead.txt'));
    input.pipe(process.stdout);
};

read();