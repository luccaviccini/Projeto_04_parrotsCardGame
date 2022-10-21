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
    const deck = document.querySelector(".deck");
    if (nCards == 4 || nCards == 8 || nCards == 12){
        deck.style.width = "40%";
    }
    if (nCards == 10){
        deck.style.width = "50%";
    }
    if (nCards == 6){
        deck.style.width = "30%";
    }
    if (nCards == 14){
        deck.style.width = "70%";
    }

    for(let i = 0; i < nCards; i++){
        const card = document.createElement("div");
        card.classList.add("card");
        deck.appendChild(card);
    }
}
