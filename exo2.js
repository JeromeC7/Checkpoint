const assert = require('assert');
Array.prototype.dedup = function(){
    const unique = [];
    this.forEach(item => {
        if(!unique.includes(item)){
            unique.push(item);
        }
    });
    return unique;
};
console.log([1, 1, 6, 2, 3, 2, 2, 4, 6, 6, 1].dedup());
assert.deepStrictEqual(
    [1, 1, 6, 2, 3, 2, 2, 4, 6, 6, 1].dedup(),
    [1, 6, 2, 3, 4]
);
