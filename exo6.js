const assert = require('assert');

function all(promises){
    return Promise.all(promises);
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