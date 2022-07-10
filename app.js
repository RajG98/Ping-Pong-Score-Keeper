const select1 = document.querySelector("#rounds");
const btn1 = document.querySelector('#btn1');
const btn2 = document.querySelector('#btn2');
const reset = document.querySelector('#btnR');
const player1 = document.querySelector('#player1');
const player2 = document.querySelector('#player2');

let numDefault = parseInt(select1.value);
let num = numDefault;

select1.addEventListener('change', (e) => {
    num = parseInt(e.target.value);
})

btn1.addEventListener('click', () => {
    scoreKeeper(player1, player2);
})
btn2.addEventListener('click', () => {
    scoreKeeper(player2, player1);
})
reset.addEventListener('click', () => {
    btn1.disabled = false;
    btn2.disabled = false;
    btn1.classList.remove("disabled");
    btn2.classList.remove("disabled");
    player1.classList.remove("greenColor","redColor");
    player2.classList.remove("greenColor","redColor");
    player1.innerText = 0;
    player2.innerText = 0;
})


const scoreKeeper = function (PSI, PSC) {
    let increase = parseInt(PSI.innerText);
    increase += 1;
    PSI.innerText = increase;

    if (num === increase) {
        btn2.disabled = true;
        btn1.disabled = true;
        btn1.classList.add("disabled");
        btn2.classList.add("disabled");
        PSI.classList.add("greenColor");
        PSC.classList.add("redColor");
    }
    
}
