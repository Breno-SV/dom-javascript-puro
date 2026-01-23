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

const charmanderr = document.querySelector("#charmanderr");
const pikachuu = document.querySelector("#pikachuu");
const zubatt = document.querySelector("#zubatt");

let findCharmanderr = false;
let findPikachuu = false;
let findZubatt = false;

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

function verifyLookPokemons(to){
    const pokemonsRightPosition =
        to === 'ArrowLeft'
            ? `${getRightPosition() - 64}px`
            : `${getRightPosition() + 64}px`;
    
    if (findCharmanderr) {
       const newTopPosition = to = "ArrowUp" 
        ? `${getTopPosition() + 8}px` 
        : `${getTopPosition() - 8}px`
        
        charmanderr.style.right = pokemonsRightPosition;
        charmanderr.style.top = newTopPosition;
    }
    
    if (findPikachuu) {
       const newTopPosition = to = "ArrowUp" 
        ? `${getTopPosition() + 36}px` 
        : `${getTopPosition() - 36}px`
        
        pikachuu.style.right = pokemonsRightPosition;
        pikachuu.style.top = newTopPosition;
    }

    if (findZubatt) {
       const newTopPosition = to = "ArrowUp" 
        ? `${getTopPosition() + 72}px` 
        : `${getTopPosition() - 72}px`
        
        zubatt.style.right = pokemonsRightPosition;
        zubatt.style.top = newTopPosition;
    }

    if(
        getTopPosition() >= 2 && 
        getTopPosition() <= 98 && 
        getRightPosition() >= 130 && 
        getRightPosition() <= 216
    ){
        charmanderr.style.display = "block";
        findCharmanderr = true;
        return;
    }
}

function verifyLookPokemons(){
    if(
        getTopPosition() >= 474 && 
        getTopPosition() <= 594 && 
        getRightPosition() <= 138 && 
        getRightPosition() >= 42
    ){
        zubatt.style.display = "block";
        findZubatt = true;
        return;
    }
}

function verifyLookPokemons(){
    if(
        getTopPosition() >= 266 && 
        getTopPosition() <= 394 && 
        getRightPosition() >= 546 && 
        getRightPosition() <= 650
    ){
        pikachuu.style.display = "block";
        findPikachuu = true;
        return;
    }
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

    verifyLookPokemons(Event.code);
});

