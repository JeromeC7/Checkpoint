const assert = require('assert');

function all(promises){
    return new Promise((resolve, reject) => {
        const results = new Array(promises.length);
        promises.forEach((promise, index) => {
            promise.then(result => {
                results[index] = result;
                resolve(results);
            }).catch(reject);
        });
    });
}

assert.doesNotReject(
    all([
        Promise.resolve(1),
        Promise.resolve(2),
        Promise.resolve(3),
    ]).then(([x, y, z]) => {
        assert(x === 1);
        assert(y === 2);
        assert(z === 3);
    })
);