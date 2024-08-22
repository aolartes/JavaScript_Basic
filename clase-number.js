//1. Tipo entero y decimal

const entero = 42;
const decimal = 3.1416;
console.log(typeof entero, typeof decimal);

//2. Notación científica

const cientifico = 2.998e8;

//3. Infinitos y NaN

const infinito = Infinity;
const noEsUnNumero = NaN;

//4. Operaciones aritméticas

//1. Suma, resta, multiplicación y división
const suma = 3 + 4;
const resta = 4 - 4;
const  multiplicación = 4 * 7;
const división = 16 / 2;

//2. Modulo y exponenciasión

const modulo = 15 % 8;
const exponenciación = 2 ** 3;

//Precisión de los números
const resultado = 0.1 + 0.2;
console.log(resultado);
console.log(resultado.toFixed(1));
console.log(resultado === 0.3); //false porque el resultado es 0.30000000000000004 y el tipo de dato es number


// Operaciones Avanzadas

const raizCuadrada = Math.sqrt(16);
const valorAbsoluto = Math.abs(-7);
const aleatorio = Math.random();
console.log(raizCuadrada, valorAbsoluto, aleatorio);

