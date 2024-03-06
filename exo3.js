const assert = require('assert');
function filterObject(objet, predicate){
    const result = {};
    for(const [key, value] of Object.entries(objet)){
        if (predicate(key, value)){
            result[key] = value;
        }
    }
    return result;
}
console.log(filterObject( { foo: 1, bar: 'hello', baz: true }, (key, value) => key === 'foo' || value === 'hello' ));
assert.deepStrictEqual(
    filterObject(
        {
            foo: 1,
            bar: 'hello',
            baz: true
        },
        (key, value) => key === 'foo' || value === 'hello'
    ),
    {
        foo: 1,
        bar: 'hello'
    }
);
