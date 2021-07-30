let sayings = new Map();
sayings.set('dog', 'woof');
sayings.set('cat', 'meow');
sayings.set('elephant', 'toot');
sayings.size; // 3
sayings.get('dog'); // woof
sayings.get('fox'); // undefined
sayings.has('bird'); // false
sayings.delete('dog');
sayings.has('dog'); // false

for (let [key, value] of sayings) {
    console.log(key + ' goes ' + value);
}
// "cat goes meow"
// "elephant goes toot"

sayings.clear();
sayings.size; // 0

/*             weakmap         */
const privates = new WeakMap();

function Public() {
    const me = {
        // Private data goes here
    };
    privates.set(this, me);
}

Public.prototype.method = function () {
    const me = privates.get(this);
    // Do stuff with private data in `me`...
};


//    set
let mySet = new Set();
mySet.add(1);
mySet.add('some text');
mySet.add('foo');

mySet.has(1); // true
mySet.delete('foo');
mySet.size; // 2

for (let item of mySet) console.log(item);