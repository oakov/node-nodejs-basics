import { createWriteStream } from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

export const write = async () => {
    // Write your code here 
    const __dirname = path.dirname(fileURLToPath(import.meta.url));
    const output = createWriteStream(path.join(__dirname, 'files', 'fileToWrite.txt'));
    process.stdout.write('Write data for the file. For exit press "Ctrl+C"\n');
    process.stdin.pipe(output);
};

write();