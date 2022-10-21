// prompting the user for the number of cards
let nCards = Number(prompt("How many cards do you want to play with? Type an even number between 4 and 14"));
// check if the number of cards is even
checkConditions();
//add cards
addCards(nCards);
console.log(nCards);








function checkConditions(){
    while((nCards < 4) || (nCards > 14) || (nCards%2 != 0)){            
        nCards =  Number(prompt("Type an even number between 4 and 14"));
    }
}

function addCards(nCards){
    let deck = document.querySelector(".deck");
    for(let i = 0; i < nCards; i++){
        const card = document.createElement("div");
        card.classList.add("card");
        deck.appendChild(card);
    }
}
