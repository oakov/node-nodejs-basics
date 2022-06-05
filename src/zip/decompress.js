import { createGunzip } from 'zlib';
import { createReadStream, createWriteStream } from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

export const decompress = async () => {
    // Write your code here 
    const __dirname = path.dirname(fileURLToPath(import.meta.url));
    const input = createReadStream(path.join(__dirname, 'files', 'archive.gz'));
    const output = createWriteStream(path.join(__dirname, 'files', 'fileToCompress.txt'));
    input.pipe(createGunzip()).pipe(output);
};

decompress();
