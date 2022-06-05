// n should be received from main thread
import { parentPort, workerData } from 'worker_threads';

export const nthFibonacci = (n) => n < 2 ? n : nthFibonacci(n - 1) + nthFibonacci(n - 2);

export const sendResult = () => {
    // This function sends result of nthFibonacci computations to main thread
    // if (Math.random() < 0.35) throw new Error;
    parentPort.postMessage(nthFibonacci(workerData));
};

sendResult();
