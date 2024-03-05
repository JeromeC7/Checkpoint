const assert = require('assert');
function categorize(values){
    const result = {};
    values.forEach(value => {
        const type = typeof value;
        if(type === 'function'){
            const name = value.name;
            if (!result[type]){
                result[type] = [];
            }
            result[type].push(`${name} ${value}`);
        }else{
            if(!result[type]){
                result[type] = [];
            }
            result[type].push(value);
        }
    });
    return result;
}

console.log(categorize([1, 'hello', function sayHi() { console.log('hi') }, 'world', true, 0n, 1000]));

assert.deepStrictEqual(
    categorize([1, 'hello', function sayHi() { console.log('hi') }, 'world', true, 0n, 1000]),
    {
        number: [1, 1000],
        string: ['hello', 'world'],
        function: ['sayHi function sayHi() { console.log(\'hi\') }'],
        boolean: [true],
        bigint: [0n]
    }
);

