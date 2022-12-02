"use strict";

// 1.1 Consigue el valor "HULK" del array de cars y muestralo por consola.
let avengers = ["HULK", "SPIDERMAN", "BLACK PANTHER"];
let posicion = avengers.indexOf("HULK");
console.log('Hulk se encuentra en la posición ' + posicion);

// 1.2 Cambia el primer elemento de avengers a "IRONMAN"
avengers = ["HULK", "SPIDERMAN", "BLACK PANTHER"];
avengers.pop();
avengers.unshift("IRONMAN");
console.log(avengers);

// 1.3 Alert numero de elementos en el array usando la propiedad correcta de Array.
avengers = ["HULK", "SPIDERMAN", "BLACK PANTHER"];
console.log('Tengo un total de ' + avengers.length + ' vengadores');

// 1.4 Añade 2 elementos al array: "Morty" y "Summer". 
// Muestra en consola el último personaje del array
let rickAndMortyCharacters = ["Rick", "Beth", "Jerry"];
rickAndMortyCharacters.push("Morty", "Summer");
console.log(rickAndMortyCharacters);
console.log(rickAndMortyCharacters.length);
console.log(rickAndMortyCharacters[4] + ' es el último personaje del array');

// 1.5 Elimina el último elemento del array y muestra el primero y el último por consola.
rickAndMortyCharacters = ["Rick", "Beth", "Jerry", "Morty", "Summer", "Lapiz Lopez"];
rickAndMortyCharacters.pop();
console.log('He eliminado a Lapiz Lopez del array: ' + rickAndMortyCharacters.join(', '));
console.log(rickAndMortyCharacters.length);
console.log('El primer personaje del array es ' + rickAndMortyCharacters[0] + ' y el último ' + rickAndMortyCharacters[4]);

// 1.6 Elimina el segundo elemento del array y muestra el array por consola.
rickAndMortyCharacters = ["Rick", "Beth", "Jerry", "Morty", "Summer", "Lapiz Lopez"];
rickAndMortyCharacters.splice(1,1);
console.log('Ahora he eliminado a Beth, que estaba en segunda posición y el array queda así: ' + rickAndMortyCharacters.join(', '));
