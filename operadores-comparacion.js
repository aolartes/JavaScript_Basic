/*
Operadores de comparación


== // Igual a
=== // Estrictamente igual a (tanto en tipo de dato como en el valor)

!= // Diferente de
!== // Estrictamente diferente de (tanto en tipo de dato como en el valor)

> // Mayor que
< // Menor que
>= // Mayor o igual que
<= // Menor o igual que
*/

const a = 10;
const b = 20;
const c = '10';

a == b; // false
a == c; // true
a === c; // false

a!=b; // true
a!==c; // true
a>b; // false
a<b; // true
a>c; // false
