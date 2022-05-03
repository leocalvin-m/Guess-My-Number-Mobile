'use  strict';
// console.log(document.querySelector('.question').textContent = 
// "13");
// console.log(document.querySelector('.lscore').textContent = 
//     "13");
// console.log(document.querySelector('.question').textContent = 
//     "13");
// console.log(document.querySelector('.infi').value = 23);

let number = Math.trunc(Math.random() * 100) + 1;
let score = 20;
let highScore = Number(document.querySelector('.hscore').textContent)  

const displayMsg = function (message) {
    document.querySelector('.message').textContent = message;
}


document.querySelector('.guess').addEventListener('click', function () {
    const guess = Number(document.querySelector('.infi').value); 
    

    if (!guess) {
        document.querySelector('.message').textContent = "🛑 No Number!";
    } else if (guess === number) {
        document.querySelector('.question').textContent = number;
        displayMsg('🎉 Correct Number!');
        document.querySelector('body').style.backgroundColor = '#60b347';
        if (score > highScore) {
            highScore = score;
            document.querySelector('.hscore').textContent = score;
        }
    } else if ( guess !== number) {
        if (score > 1) {
            displayMsg(guess > number ? '📈 Too High' : '📉 Too Low');
            score -= 1;
            document.querySelector('.lscore').textContent = score;
        } else {
            displayMsg('You Lost!');
            document.querySelector('body').style.backgroundColor = '#e03131';
            document.querySelector('.lscore').textContent = 0;
        }
        
    }
});

document.querySelector('.try--again').addEventListener('click', function () {
    score = 20;
    document.querySelector('.question').textContent = '?';
    number = Math.trunc(Math.random() * 100) + 1;
    displayMsg('Start Guessing...');
    document.querySelector('body').style.backgroundColor = '#222';
    document.querySelector('.lscore').textContent = score;
    document.querySelector('.infi').value = '';


});


