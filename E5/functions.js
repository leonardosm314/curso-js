// declaraciones de funciones

function unaFunction() {
    return "soy una funcion"
}
// funcion de flecha
const myfunc = () => {

}

// funcion anonima
(function () {

})

    (() => {

    })

// funcion recursiva 
const myfunction2 = (x) => {
    if (x) return;
    myfunction2()
}

// funcion de anidada
function A(x) {
    function B(y) {
        function C(z) {
            console.log(x + y + z);
        }
        C(3);
    }
    B(2);
}
A(1); // registra 6 (1 + 2 + 3)

//usar argumentos 
function myConcat(separator) {
    var result = ''; // inicia list
    var i;
    // itera a través de arguments
    for (i = 1; i < arguments.length; i++) {
        result += arguments[i] + separator;
    }
    return result;
}
// parametros predeterminado
function multiply(a, b = 1) {
    return a * b;
}
// lista de funciones de javascript
