//              Operadores de asignación
x = y
x += y
x -= y
x *= y
x /= y
x %= y
x **= y
x <<= y
x >>= y
x >>>= y
//              Desestructuración
var foo = ['one', 'two', 'three'];

// sin desestructurar
var one = foo[0];
var two = foo[1];
var three = foo[2];

// con desestructuración
var [one, two, three] = foo;

//              Operadores de comparación
(a == b);
(a === b);
(a !== b);
(a > b);
(a < b);
(a >= b);

//              Operador condicional 
var status = (age >= 18) ? 'adult' : 'minor';

//              Operadores unarios

typeof myFun;       // devuelve "function"
typeof shape;       // devuelve "string"
typeof size;        // devuelve "number"
typeof foo;         // devuelve "object"
typeof today;       // devuelve "object"
typeof doesntExist; // devuelve "undefined"

//              Operadores relacionales
var mycar = { make: 'Honda', model: 'Accord', year: 1998 };
'make' in mycar;  // devuelve true
'model' in mycar; // devuelve true
