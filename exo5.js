const assert = require('assert');

const pSetTimeout = ms => new Promise(resolve => setTimeout(resolve, ms));

function race(promises){
    return new Promise((resolve, reject) => {
        promises.forEach(promise => {
            promise.then(resolve).catch(reject);
        });
    });
}

assert.doesNotReject(
    race([
        pSetTimeout(4000).then(() => 1),
        pSetTimeout(3000).then(() => 2),
        pSetTimeout(2000).then(() => 3),
        pSetTimeout(1000).then(() => 4)
    ]).then(winner => {
        assert(winner === 4);
    })
);