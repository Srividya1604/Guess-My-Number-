'use strict';
//number behind question mark
let secretNumber = Math.trunc(Math.random()*20)+1;

//msg displayed after check
function displayMessage(msg) {
    document.querySelector('.message').textContent = msg;
}

let score = 20;
let highscore = 0;

//logic for working of check btn
document.querySelector('.check').addEventListener('click',function() {
    //number input for guessing
    const guess = document.querySelector('.guess').value;
    
    if (!guess) 
    {
        displayMessage('Invalid input');
    }

    else if (guess == secretNumber) 
    {
        //msg
        displayMessage('You won');

        //secretnumber display logic
        document.querySelector('.number').textContent = secretNumber;

        //green color bg
        document.querySelector('body').style.backgroundColor = '#60b347';

        //highscore updation
        if (score > highscore) {
            highscore = score;
            document.querySelector('.highscore').textContent = score;
        }
    } 

    else if (guess != secretNumber) 
    {
        //high and low check
        guess > secretNumber ?
            displayMessage('Too high') :
            displayMessage('Too low');

        //score updation
        if (score > 1) 
        {
            score--;
            document.querySelector('.score').textContent = score;
        } 
        else 
        {
            displayMessage('You lost the game');
            document.querySelector('.score').textContent = 0;
        }
    }
});

//logic for reloading game on again btn
document.querySelector('.again').addEventListener('click', () => {
    score = 20;
    document.querySelector('body').style.backgroundColor = '#000';
    document.querySelector('.number').textContent = '?';
    document.querySelector('.score').textContent = score;
    document.querySelector('.guess').value = '';
    displayMessage('Start playing');
    secretNumber = Math.trunc(Math.random() * 20) + 1;
});
