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

const audio = document.querySelector("audio");
audio.volume = 0.1;

const musicControl = document.querySelector(".music-control");
musicControl.addEventListener('click', (Event) => {
    Event.stopPropagation();

    Event.target.src = `${Event.target.src}`.includes("onn.png") 
    ? "../assets/icons/mute.png"
    : "../assets/icons/onn.png";
    
    `${Event.target.src}`.includes("onn.png") ? audio.play() : audio.pause();
});

// também poderia usar a function dessa forma:
// function teste() {}
// body.addEventListener("keydown", teste);

function getRightPosition() {
    //console.log()
    return parseInt(ash.style.right.split("px")) || 2;

    //console.log(position);
}

function getTopPosition() {
    //console.log(ash.style.top);
    return parseInt(ash.style.top.split("px")) || 2;
}

body.addEventListener("keydown", (Event) => {
    Event.stopPropagation();

    switch (Event.code) {

        case "ArrowLeft":
            if(getRightPosition() < 770){
                ash.style.right = `${getRightPosition() + 8}px`;    
                ash.src = "../assets/leftt.png";
            }
            break;

        case "ArrowRight":
            if(getRightPosition() > 2){
                ash.style.right = `${getRightPosition() - 8}px`;    
                ash.src = "../assets/rightt.png";
            }
            break;

        case "ArrowDown":
            if(getTopPosition() < 625){
                ash.style.top = `${getTopPosition() + 8}px`;    
                ash.src = "../assets/frontt.png";
            }
            break;

        case "ArrowUp":
            if(getTopPosition() > 2){
                ash.style.top = `${getTopPosition() - 8}px`;    
                ash.src = "../assets/backk.png";
            }
            break;

        default:
            break;
    }
});

