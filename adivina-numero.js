const numeroSecreto = Math.floor(Math.random() * 10 +1);

const numeroJugador = parseInt(prompt('Adivina el número secreto (entre 1 y 10)'));

console.log(`Este es el numero secreto con el que estas juganto: ${numeroJugador}`)
console.log(`Este es el numero secreto: ${numeroSecreto}`)
if (numeroJugador === numeroSecreto){
    console.log('¡Felicitaciones! Adivinaste el número secreto');
} else if (numeroJugador > numeroSecreto){
    console.log('El número secreto es menor');
} else {
    console.log('El número secreto es mayor');
}