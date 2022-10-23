// global variables
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
let moves = 0;
let time = 0;
let setIntervalID;
// prompting the user for the number of cards
let nCards = Number(prompt("Com quantas cartas você quer jogar? Escolha um número par entre 4 e 14!"));
startTime();
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
    // adding moves counter
    moves++;
    // creating array to store cards
    let cardsList = document.querySelectorAll(".card");
    let frontside = card.querySelector(".frontside");
    let backside = card.querySelector(".backside");
    
    //toggling turn cards    
    frontside.classList.add("frontside-turn");
    backside.classList.add("backside-turn");
    //adding selected class to card
    card.classList.toggle("selected");
    card.onclick = null;
    //checking if there are two cards selected
    if(document.querySelectorAll(".selected").length == 2){
        cardsList.forEach(card => {
            if(!card.classList.contains("selected")){
                card.onclick = null;
            }}); 
              
        

        //checking if the two cards are the same
        if(document.querySelectorAll(".selected")[0].querySelector(".frontside").querySelector("img").src == document.querySelectorAll(".selected")[1].querySelector(".frontside").querySelector("img").src){
            console.log("same cards");
            //adding matched class to cards
            document.querySelectorAll(".selected")[0].classList.add("matched");
            document.querySelectorAll(".selected")[1].classList.add("matched");
            //removing selected class from cards
            document.querySelectorAll(".selected")[1].classList.remove("selected");
            document.querySelectorAll(".selected")[0].classList.remove("selected");

            //disable onclick event for all other cards that dont have matched class
            cardsList.forEach(card => {
            if(card.classList.contains("matched")){
                card.onclick = null;
            }});
             
            cardsList.forEach(card => { 
                if(!card.classList.contains("matched")){
                    card.onclick = function() { turnCard(this); }}});

            // disable onclick event for all other cards
            

            //checking if all cards are matched
            if(document.querySelectorAll(".matched").length == nCards){
                setTimeout(youWon, 800);
            }
            
            
        }
        else{
            setTimeout(function() {unturnCard()}, 1000);            
        }
    }
    
    // adding onclick to card element
    
    
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

// you won functino to be called when all cards are matched
function youWon(){
    stopTime();
    alert(`Parabéns! Você ganhou em ${moves} jogadas! E seu tempo foi de ${time} segundos!`);
    let restart = prompt("Gostaria de reinicar a partida?");
    if(restart === "sim"){
        document.location.reload();
    }
}   

function unturnCard() {
    // removing class to unturn cards
    document.querySelectorAll(".selected .frontside")[1].classList.remove("frontside-turn");
    document.querySelectorAll(".selected .backside")[1].classList.remove("backside-turn");
    document.querySelectorAll(".selected .frontside")[0].classList.remove("frontside-turn");
    document.querySelectorAll(".selected .backside")[0].classList.remove("backside-turn");

    //removing selected class from cards
    document.querySelectorAll(".selected")[1].classList.remove("selected");
    document.querySelectorAll(".selected")[0].classList.remove("selected");

    // enabling onclick for all cards
    let cardsList = document.querySelectorAll(".card");
    // checking to see if card is matched
    cardsList.forEach(card => { 
        if(!card.classList.contains("matched")){
            card.onclick = function() { turnCard(this); }}});
    cardsList.forEach(card => { 
        if(!card.classList.contains("selected")){
            card.onclick = function() { turnCard(this); }}});
        
}

function startTime() {

    setIntervalID = setInterval(function() {
        // incrementing time
        time++;
        // updating time on screen
        document.querySelector(".time").innerHTML = time;
    }, 1000); 
}

function stopTime() {
    clearInterval(setIntervalID);
}