// global variables
let teste = "HEllo World";
let backImage_src = "./images/parrot.png"
let frontImage_src = "./images/dog.png";
const deck = document.querySelector(".deck");


// prompting the user for the number of cards
let nCards = Number(prompt("How many cards do you want to play with? Type an even number between 4 and 14"));
// check if the number of cards is even
checkConditions();
//add cards
addCards(nCards);



function checkConditions(){
    while((nCards < 4) || (nCards > 14) || (nCards%2 != 0)){            
        nCards =  Number(prompt("Type an even number between 4 and 14"));
    }
}

function addCards(nCards){
    
    
    cardsLayout(nCards)

    for(let i = 0; i < nCards; i++){
        // create card, front and back side
        let card = document.createElement("div");
        let backside = document.createElement("div");
        let frontside = document.createElement("div");

        // adding classes to each element
        card.classList.add("card"); 
        backside.classList.add("backside");
        frontside.classList.add("frontside");
        // adding images to back
        backside.appendChild(document.createElement("img"));
        // adding source to back
        backside.querySelector("img").src = backImage_src;


        // appending front and back side to card element
        card.appendChild(frontside);
        card.appendChild(backside);
        // adding onclick to card element
        card.onclick = function() { turnCard(this); };
        // adding card to deck
        deck.appendChild(card);

    }
}

function cardsLayout(nCards){
 
    if (nCards == 4 || nCards == 8 || nCards == 12)
    {deck.style.maxWidth = "604px";}
    if (nCards == 10){deck.style.maxWidth = "755px";}
    if (nCards == 6){deck.style.maxWidth = "453px";}
    if (nCards == 14){deck.style.maxWidth = "1057px";}
    
}

function turnCard(card){
    let frontside = card.querySelector(".frontside");
    let backside = card.querySelector(".backside");
    frontside.classList.toggle("frontside-turn");
    backside.classList.toggle("backside-turn");
}
