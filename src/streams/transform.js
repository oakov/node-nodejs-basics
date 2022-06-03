import { Transform } from 'stream';

export const transform = async () => {
    // Write your code here 
    const reverseString = new Transform({
        transform(chunk, encoding, callback) {
            this.push(chunk.toString().trim().split("").reverse().join("") + '\n\n');
            callback();
        }
    });
    process.stdout.write('Write anything. For exit press "Ctrl+C"\n');
    process.stdin.pipe(reverseString).pipe(process.stdout);
};

transform();
