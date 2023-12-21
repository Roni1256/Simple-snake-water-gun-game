
//*************Human card****************** */
let humanCard=document.getElementById('human')
let snakeCard=document.getElementById('snake');
let waterCard=document.getElementById('water');
let gunCard=document.getElementById('gun');


// **********Computer card****************/
let robotCard=document.getElementById('robot')
let snakeCardAi=document.getElementById('snake-ai');
let waterCardAi=document.getElementById('water-ai');
let gunCardAi=document.getElementById('gun-ai');

// **********buttons ****************/
let snakeBtn=document.getElementById('snake-btn');
let waterBtn=document.getElementById('water-btn');
let gunBtn=document.getElementById('gun-btn');

// **********Score board*************/

let nMatchPlayed=document.getElementById('matches');
let nWins=document.getElementById('wins');
let nLoses=document.getElementById('loses');
let nTies=document.getElementById('ties');

let score={
    wins:0,
    lose:0,
    ties:0,
    matches:0
}

/* **************Main logic of the program is to make the interactive games with the human player and the Computer*********************  */

snakeBtn.addEventListener('click',()=>{
    score.matches+=1;
    nMatchPlayed.innerHTML=score.matches;
    showCard(snakeCard,humanCard,0);

    let computerValue=computerValueGenerator();
    if(computerValue === 1){       //*******************ties************/
        score.ties+=1;
        nTies.innerHTML=score.ties;
        showCard(snakeCardAi,robotCard,2);
        
    }
    else if(computerValue === 2){  //**************wins*****************/
        nWins.innerHTML=(score.wins+=1);
        showCard(waterCardAi,robotCard,2);
       
    }
    else{                          //*************loses*****************/
        nLoses.innerHTML=(score.lose+=1);
        showCard(gunCardAi,robotCard,2);
    }
})

waterBtn.addEventListener('click',()=>{
    score.matches+=1;
    nMatchPlayed.innerHTML=score.matches;
    showCard(waterCard,humanCard,0);

    let computerValue=computerValueGenerator();
    if(computerValue === 1){
        nLoses.innerHTML=(score.lose+=1);
        showCard(snakeCardAi,robotCard,2);
       
    }
    else if(computerValue === 2){
        nTies.innerHTML=(score.ties+=1);
        showCard(waterCardAi,robotCard,2);
        
    }
    else{
        nWins.innerHTML=(score.wins+=1);
        showCard(gunCardAi,robotCard,2);
    }
})

gunBtn.addEventListener('click',()=>{
    score.matches+=1;
    nMatchPlayed.innerHTML=score.matches;
    showCard(gunCard,humanCard,0);

    let computerValue=computerValueGenerator();

    if(computerValue === 1){
        nWins.innerHTML=(score.wins+=1);
        showCard(snakeCardAi,robotCard,2);
    }
    else if(computerValue === 2){

        nLoses.innerHTML=(score.lose+=1);
        showCard(waterCardAi,robotCard,2);
        
    }
    else{
        nTies.innerHTML=(score.ties+=1);
        showCard(gunCardAi,robotCard,2);
    }
})

// function to generate random value within 1,2,3
function computerValueGenerator(){
    return Math.ceil(Math.random()* 3);
}
 
//  function to show the card which is selected
 function showCard(image,player,timeout){
    
     setTimeout(() => {
         image.style.display='block';
         player.style.visiblity='hidden';
     },timeout*1000);
 
     setTimeout(() => {
         image.style.display='none';
         player.style.visiblity='visible';  
     },3000);
 
 }












       

