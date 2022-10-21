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
        // create card element
        const card = document.createElement("div");
        card.classList.add("card"); 
        //creating image1
        let image1 = document.createElement("img");
        image1.src = backImage_src;
        image1.classList.add("backside");
        card.appendChild(image1); 
        //creating image2
        let image2 = document.createElement("img");
        image2.src = "./images/dog.png";
        image2.classList.add("frontside","hide");
        card.appendChild(image2);  
        card.onclick = function() { turnCard(this); };
        deck.appendChild(card);
    }
}

function cardsLayout(nCards){
 
    if (nCards == 4 || nCards == 8 || nCards == 12){
        deck.style.maxWidth = "604px";
    }
    if (nCards == 10){
        deck.style.maxWidth = "755px";
    }
    if (nCards == 6){
        deck.style.maxWidth = "453px";
    }
    if (nCards == 14){
        deck.style.maxWidth = "1057px";
    }
}

function turnCard(card){
    let card2Turn = card;
    card2Turn.querySelector(".backside").classList.toggle("hide");
    card2Turn.querySelector(".frontside").classList.toggle("hide");
}