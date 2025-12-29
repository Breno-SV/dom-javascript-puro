// .classes 
// # ids
// nome do elemento
// div h1 => elemnto dentro de outro elemento

// querySelector => seleciona apenas um elemento (o primeiro que ele encontrar)
// querySelectorAll => seleciona todos os elementos e coloca dentro de um array 

const body = document.querySelector("body");
const game = document.querySelector(".game");

const count = document.querySelector("h1");
const reset = document.querySelector(".restart");

const ash = document.querySelector("#ash");

const charmander = document.querySelector("#charmanderr");
const pikachu = document.querySelector("#pikachuu");
const zubat = document.querySelector("#zubatt");

// também poderia usar a function dessa forma:
// function teste() {}
// body.addEventListener("keydown", teste);

body.addEventListener("keydown", (Event) => {
    Event.stopPropagation
});


