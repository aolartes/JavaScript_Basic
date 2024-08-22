console.log('Hola Mundo!');
let cajaDeAndy = 'Woody';
console.log(cajaDeAndy);

//Lo NO permitido
let c = 'Woody';
let cda = 'Woody';
let pcAndy = 'Woody';

//Lo Permitido
let primerTrasteoDeAndy = 'Woody';
let urlDelUsuario = 'https://www.google.com';
let idDelUsuario = '1234567890';

let contador = 0;

console.log(contador);


const PI = 3.1416;

let tiposDeDatos = [
    {
        primitivo:['string', 'number', 'boolean', 'null', 'undefined', 'object', 'symbol'],
        complejos:['array', 'function', 'object']
    }
]
console.log(tiposDeDatos[0].hola);

//Primitivos
//String
let nombe = 'Tere';

//number
let edad = 25;

//boolean
let esMayorDeEdad = true;

//null
let noHayValor = null;

//undefined
let nodefinidi = undefined;

// Symbol
let simboloUnico = Symbol('miSimbolo');

// bigint
let numerGrabde = 2n;
console.log(numerGrabde);


//Complejos

let carro = {
    marca: 'Tesla',
    modelo: 'Model s',    
}

//array
let frutas = ['manzana', 'pera', 'uva'];

//function
function saludar(){}