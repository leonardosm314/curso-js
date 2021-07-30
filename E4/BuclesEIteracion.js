///
for (let step = 0; step < 5; step++) {
    // Se ejecuta 5 veces, con valores del paso 0 al 4.
    console.log('Camina un paso hacia el este');
}
//
5.

let i = 0;
do {
    i += 1;
    console.log(i);
} while (i < 5);
//
let n = 0;
let x = 0;
while (n < 3) {
    n++;
    x += n;
}
//
let x = 0;
let z = 0;
labelCancelLoops: while (true) {
    console.log('Bucles externos: ' + x);
    x += 1;
    z = 1;
    while (true) {
        console.log('Bucles internos: ' + z);
        z += 1;
        if (z === 10 && x === 10) {
            break labelCancelLoops;
        } else if (z === 10) {
            break;
        }
    }
}
///
let i = 0;
let n = 0;
while (i < 5) {
    i++;
    if (i === 3) {
        continue;
    }
    n += i;
    console.log(n);
}
//
const arr = [3, 5, 7];
arr.foo = 'hola';

for (let i in arr) {
    console.log(i); // logs "0", "1", "2", "foo"
}

for (let i of arr) {
    console.log(i); // logs 3, 5, 7
}