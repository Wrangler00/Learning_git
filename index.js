
const BATCH_SIZE = 4;
let count = 4;

async function upload(t) {
    return new Promise((r, j) => {
        setTimeout(() => {
            return r(true);
        }, t);
    })
}

function temp(i) {
    upload(Math.floor(Math.random() * 1100) + 1000).then(() => {
        if (count) {
            --count;
            temp(BATCH_SIZE + i);
        }ccds
    })
}


const a = () => { for (let i = 0; i < BATCH_SIZE; i++)temp(i) }

console.time("start");
a();


process.on('exit', function () {
    console.timeEnd('start');
});