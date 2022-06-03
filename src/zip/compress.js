import { createGzip } from 'zlib';
import { createReadStream, createWriteStream } from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

export const compress = async () => {
    // Write your code here
    const __dirname = path.dirname(fileURLToPath(import.meta.url));
    const input = createReadStream(path.join(__dirname, 'files', 'fileToCompress.txt'));
    const output = createWriteStream(path.join(__dirname, 'files', 'archive.gz'));
    input.pipe(createGzip()).pipe(output);
};

compress();
