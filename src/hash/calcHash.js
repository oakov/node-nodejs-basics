import { createHash } from 'crypto';
import path from 'path';
import { fileURLToPath } from 'url';
import { createReadStream } from 'fs';

export const calculateHash = async () => {
    // Write your code here
    const __dirname = path.dirname(fileURLToPath(import.meta.url));
    const hash = createHash('sha256');
    const input = createReadStream(path.join(__dirname, 'files', 'fileToCalculateHashFor.txt'));
    input.pipe(hash).setEncoding('hex').pipe(process.stdout);
};

calculateHash();