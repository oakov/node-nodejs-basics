export const parseArgs = () => {
    // Write your code here 
    const args = process.argv.slice(2);
    if (args.length > 0) {
        let values = [];
        for (let i = 0; i < args.length; i = i + 2) {
            values.push(`${args[i].slice(2)} is ${args[i + 1]}`);
        }
        console.log(values.join(', '));
    }
};

parseArgs();