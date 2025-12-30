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

function getRightPosition (){
    console.log (ash.style.right);
}

function getTopPosition (){
    console.log (ash.style.top);
}

body.addEventListener("keydown", (Event) => {
    Event.stopPropagation();

    switch (Event.code) {
        
        case 'ArrowLeft':
        getRightPosition();
        getTopPosition();
        ash.src = "../assets/leftt.png";
        break;

        case 'ArrowRight':
        ash.src = "../assets/rightt.png";
        break;

        case 'ArrowDown':
        ash.src = "../assets/frontt.png";
        break;

        case 'ArrowUp':
        ash.src = "../assets/backk.png";
        break;

        default:
        break;
    }
});


