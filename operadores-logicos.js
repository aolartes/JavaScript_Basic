/*
    Operadores lógicos
Operadores de comparación

&& // AND  (y)
|| // OR (o)
! // NOT (no)

*/

const a = 10;
const b = 20;
const c = '10';

a == b && a === c; // false
a != b || a === c; // true
!(a===c); // true porque a === c es false, y !false es true