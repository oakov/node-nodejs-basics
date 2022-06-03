export const parseEnv = () => {
    // Write your code here 
    const proceses = process.env;
    let procArray = [];
    for (let pr in proceses) {
        if (pr.match('RSS_')) procArray.push(pr);
    }
    console.log(procArray.map((p) => `${p}=${proceses[p]}`).join('; '));
};

parseEnv();