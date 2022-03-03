'use strict';

//selecting elements
const player0El = document.querySelector('.player--0');
const player1El = document.querySelector('.player--1');

const score0El= document.getElementById('score--0');
const score1El = document.getElementById('score--1');
const current0El = document.getElementById('current--0');
const current1E1 = document.getElementById('current--1');

const diceEl =document.querySelector('.dice');
const btnNew=document.querySelector('.btn--new');
const btnRoll=document.querySelector('.btn--roll');
const btnHold=document.querySelector('.btn--hold');


let scores,currentScore,activePlayer,playing;

//initializxation of game
const init = function(){
  scores= [0,0];
  currentScore =0;
  activePlayer =0;
 //for start the game
  playing = true;
  score0El.textContent = 0;
  score1El.textContent= 0;
  current0El.textContent =0;
  current1E1.textContent =0;

 //hide dice
 diceEl.classList.add('hidden');
 //player--winner will remove from that player who has it 
 player0El.classList.remove('player--winner');
 player1El.classList.remove('player--winner');
 //add active color to player 0;
 player0El.classList.add('player--active');
 //remove active color to player1 if it has 
 player1El.classList.remove('player--active');

}

//for assigning when page load
init();


//update score
const updateScore = function(activePlayer,currentScore){
    document.getElementById(`current--${activePlayer}`).textContent= currentScore;
}

//switch player
const switchPlayer =function(){
        currentScore=0;
        updateScore(activePlayer,currentScore);
        activePlayer = activePlayer === 0 ? 1 : 0;
        player0El.classList.toggle('player--active');
        player1El.classList.toggle('player--active');
}



//Rolling dice functionality
btnRoll.addEventListener('click',function(){
    if(playing)
{
    //1.generating a random dice roll
    const dice = Math.trunc(Math.random() * 6)+1;
    
    //2.Display dice
    diceEl.classList.remove('hidden');
    diceEl.src = `dice-${dice}.png`;

    //3.check for rolled 1
    if(dice!==1)
    { //add dice to current score
       currentScore += dice;
      updateScore(activePlayer,currentScore);
      console.log(currentScore);
      console.log(scores);
    }
    //switch to next player
    else{
        switchPlayer();
    }
}
});


// for holding values
btnHold.addEventListener('click',function(){
if(playing)
{
    //1.Add current score to active player score
 scores[activePlayer] +=currentScore;

 document.getElementById(`score--${activePlayer}`).textContent = scores[activePlayer];

 if(scores[activePlayer] >= 100){
   //finish the game
   playing = false;
   diceEl.classList.add('hidden');

   document.querySelector(`.player--${activePlayer}`).classList.add('player--winner');//add color to winner
   document.querySelector(`.player--${activePlayer}`).classList.remove('player--active');// remove previous color

   }
 else
  {
    //switch player
    switchPlayer();
  } 
}
});

//New game
btnNew.addEventListener('click',init);
