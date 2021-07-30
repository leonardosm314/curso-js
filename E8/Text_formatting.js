//      String literals
'foo'
"bar"
//      Hexadecimal escape sequences
'\xA9' // "©"
//      String objects
const foo = new String('foo'); // Creates a String object
console.log(foo); // Displays: [String: 'foo']
typeof foo; // Returns 'object'