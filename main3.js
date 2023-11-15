for(let i = 1 ; i <= 5 ; i++){
    console.log(i);
 }
 console.log('-------------------------');

let listacolores = ['rojo', 'verde', 'azul', 'amarillo'];
for(let elemento of listacolores){
    console.log(elemento);
}
console.log('-------------------------');

let Usuario= {
    Nombre: 'Jose',
    Edad: 25,
    Profecion: 'Software Engineer',
};

for(let key in Usuario){
    console.log(key,': ', Usuario[key]);
} 

console.log('-------------------------');

let numero = 1;
while (Math.pow(numero, 2) <= 100) {
    numero++;
}
numero--; 
console.log("El número más cercano a 100 cuyo cuadrado es menor que 100 es: " + numero);

console.log('-------------------------');

let number = 1;

do {
    if (number % 2 === 0) {
        console.log(number);
    }
    number++;
} while (number <= 10);






