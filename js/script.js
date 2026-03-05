// .classes 
// # ids
// nome do elemento
// div h1 => elemento dentro de outro elemento

// querySelector => seleciona apenas um elemento (o primeiro que ele encontrar)
// querySelectorAll => seleciona todos os elementos e coloca dentro de um array 

const body = document.querySelector("body");
const game = document.querySelector(".game");

const count = document.querySelector("h1");
const reset = document.querySelector("#restart");

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

restart.addEventListener('click', () => {
    window.location.reload();
    restart.style.display = "none";
});

function clearCharactersAndFinishGame(){
    ash.style.display = "none";
    pikachuu.style.display = "none";
    charmanderr.style.display = "none";
    zubatt.style.display = "none";   

    restart.style.display = "block";
    count.textContent = "";
}

let currentCount = 20;

const interval = setInterval(() => {
    if (currentCount <= 0){
        game.style.backgroundImage = "url('../assets/game_over.jpg')";
        
        clearCharactersAndFinishGame();
        clearInterval(interval);
        return;
    }    
    currentCount--;
    count.textContent = currentCount;
}, 1000)

function finishGame (){
    if(findCharmanderr && findPikachuu && findZubatt){
        clearCharactersAndFinishGame();

        const timeout = setTimeout(() => {
            game.style.backgroundImage = "url('../assets/win.jpg')";

            clearInterval(interval);
            clearTimeout(timeout);
            audio.pause();
        }, 200);
    }
}

function getRightPosition() {
    return parseInt(ash.style.right.split("px")) || 2;
}

function getTopPosition() {
    return parseInt(ash.style.top.split("px")) || 2;
}

// Função unificada para verificar todos os pokémons
function verifyLookPokemons(to){

    finishGame();
    const pokemonsRightPosition =
        to === 'ArrowLeft'
            ? `${getRightPosition() - 64}px`
            : `${getRightPosition() + 64}px`;
    
    if (findCharmanderr) {
       const newTopPosition = to === "ArrowUp" 
        ? `${getTopPosition() + 8}px` 
        : `${getTopPosition() - 8}px`;
        
        charmanderr.style.right = pokemonsRightPosition;
        charmanderr.style.top = newTopPosition;
    }
    
    if (findPikachuu) {
       const newTopPosition = to === "ArrowUp" 
        ? `${getTopPosition() + 36}px` 
        : `${getTopPosition() - 36}px`;
        
        pikachuu.style.right = pokemonsRightPosition;
        pikachuu.style.top = newTopPosition;
    }

    if (findZubatt) {
       const newTopPosition = to === "ArrowUp" 
        ? `${getTopPosition() + 72}px` 
        : `${getTopPosition() - 72}px`;
        
        zubatt.style.right = pokemonsRightPosition;
        zubatt.style.top = newTopPosition;
    }

    // Verifica Charmanderr
    if(
        getTopPosition() >= 2 && 
        getTopPosition() <= 98 && 
        getRightPosition() >= 130 && 
        getRightPosition() <= 216
    ){
        charmanderr.style.display = "block";
        findCharmanderr = true;
    }

    // Verifica Zubatt
    if(
        getTopPosition() >= 474 && 
        getTopPosition() <= 594 && 
        getRightPosition() <= 138 && 
        getRightPosition() >= 42
    ){
        zubatt.style.display = "block";
        findZubatt = true;
    }

    // Verifica Pikachuu
    if(
        getTopPosition() >= 266 && 
        getTopPosition() <= 394 && 
        getRightPosition() >= 546 && 
        getRightPosition() <= 650
    ){
        pikachuu.style.display = "block";
        findPikachuu = true;
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
