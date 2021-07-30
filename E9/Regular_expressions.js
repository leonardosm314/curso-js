//
let re = /ab+c/;// new RegExp('ab+c');

//      lista de funciones
// exec()	
// test()	
// match()	
// matchAll()	
// search()
// replace()
// replaceAll()
// split()


// uso
function escapeRegExp(string) {
    return string.replace(/[.*+?^${}()|[\]\\]/g, '\\$&'); // $& means the whole matched string
}