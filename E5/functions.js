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
// eval()
// El método eval() evalúa el código JavaScript representado como una cadena.

// uneval()
// El método uneval() crea una representación de cadena del código fuente de un Object.

// isFinite()
// La función global isFinite() determina si el valor pasado es un número finito. Si es necesario, el parámetro, primero se convierte en un número.

// isNaN()
// La función isNaN() determina si un valor es NaN o no. Nota: La coerción dentro de la función isNaN tiene interesantes reglas; también puedes querer usar Number.isNaN(), como se define en ECMAScript 2015, o puedes usar typeof para determinar si el valor no es un número (NaN).

// parseFloat()
// La función parseFloat() procesa un argumento de cadena y devuelve un número de punto flotante.

// parseInt()
// La función parseInt() procesa un argumento de cadena y devuelve un número entero de la base especificada (la base en los sistemas numéricos matemáticos).

// decodeURI()
// La función decodeURI() decodifica un identificador uniforme de recursos (URI) creado previamente por encodeURI o por una rutina similar.

// decodeURIComponent()
// El método decodeURIComponent() decodifica un componente Identificador uniforme de recursos (URI) creado previamente por encodeURIComponent o por un rutina similar.

// encodeURI()
// El método encodeURI() codifica un identificador uniforme de recursos (URI) reemplazando cada instancia de ciertos caracteres por una, dos, tres o cuatro secuencias de escape que representan la codificación UTF-8 del caracter (solo habrá cuatro secuencias de escape para caracteres compuestos por dos caracteres "sustitutos").

// encodeURIComponent()
// El método encodeURIComponent() codifica un componente Identificador uniforme de recursos (URI) reemplazando cada instancia de ciertos caracteres por una, dos, tres o cuatro secuencias de escape que representan la codificación UTF-8 del caracter (solo habrá cuatro secuencias de escape para caracteres compuestos por dos caracteres "sustitutos").

// escape()
// El método obsoleto escape() calcula una nueva cadena en la que ciertos caracteres han sido reemplazados por una secuencia de escape hexadecimal. En su lugar usa encodeURI o encodeURIComponent.

// unescape()
// El método obsoleto unescape() calcula una nueva cadena en la que las secuencias de escape hexadecimales se reemplazan con el caracter que representan. Las secuencias de escape se pueden introducir por medio de una función como escape. Debido a que unescape() está en desuso, usa decodeURI() o decodeURIComponent en su lugar.

