import { Worker } from 'worker_threads';
import path from 'path';
import { fileURLToPath } from 'url';
import { cpus } from 'os';

export const performCalculations = async () => {
    // Write your code here
    const __dirname = path.dirname(fileURLToPath(import.meta.url));
    const promises = [];
    for (let i = 0; i < cpus().length; i++) {
        promises.push(new Promise((resolve) => {
            const worker = new Worker(path.join(__dirname, 'worker.js'), { workerData: 10 + i });
            worker.on('message', result => {
                resolve({ status: 'resolved', data: result });
            });
            worker.on('error', error => {
                resolve({ status: 'error', data: null });
            });
        }));
    }
    console.log(await Promise.all(promises));
}

performCalculations();
