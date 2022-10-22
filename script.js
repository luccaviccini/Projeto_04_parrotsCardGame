// global variables
let teste = "HEllo World";
let backImage_src = "./images/parrot.png"
const deck = document.querySelector(".deck");
const frontImageSrc = [
    "./images/bobrossparrot.gif",
    "./images/explodyparrot.gif",
    "./images/metalparrot.gif" ,
    "./images/revertitparrot.gif",
    "./images/tripletsparrot.gif",
    "./images/unicornparrot.gif",
    "./images/fiestaparrot.gif"
]
let frontImageSrcShuffled = [];
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
    randomCard();
    for(let i = 0; i < nCards; i++){
        // create card, front and back side
        let card = document.createElement("div");
        let backside = document.createElement("div");
        let frontside = document.createElement("div");
        let pictureaddr

        // adding classes to each element
        card.classList.add("card"); 
        backside.classList.add("backside");
        frontside.classList.add("frontside");
        // creating image in the back side && adding source
        backside.appendChild(document.createElement("img"));
        backside.querySelector("img").src = backImage_src;
        // creating image in the front side && adding source
        frontside.appendChild(document.createElement("img"));
        
        frontside.querySelector("img").src = frontImageSrcShuffled[i];
        


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

function randomCard() {
    // randomizing initial array of addresses
    frontImageSrc.sort(() => Math.random() -0.5);
    // slicing array based on input of user
    frontImageSrcShuffled = frontImageSrc.slice(0, nCards/2);
    //duplicating array
    frontImageSrcShuffled = frontImageSrcShuffled.concat(frontImageSrcShuffled); 
    // randomizing duplicated array
    frontImageSrcShuffled.sort(() => Math.random() -0.5)  
    
}
