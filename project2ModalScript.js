'use strict';

let secretNumber = Math.trunc(Math.random() * 20) + 1;

function randomNumGenerator() {
  secretNumber = Math.trunc(Math.random() * 20) + 1;
}

let score = 20;
let highscore = 0;

const displayMessage = function (message) {
  document.querySelector('.message').textContent = message;
};

const changeBackgroundColor = function (colorscheme) {
  document.querySelector('body').style.backgroundColor = colorscheme;
};

const scoreCounter = function (scoreNum) {
  document.querySelector('.score').textContent = scoreNum;
};

const secretNumberBox = function (character) {
  document.querySelector('.number').textContent = character;
};

const secretNumBoxWidth = function (wide) {
  document.querySelector('.number').style.width = wide;
};

// Check button functionality
document.querySelector('.check').addEventListener('click', function () {
  const guess = Number(document.querySelector('.guess').value);
  console.log(guess, typeof guess);

  // When guess has no input.
  if (!guess) {
    displayMessage('No Number!');
  }
  // When guess matches secret number.
  else if (guess === secretNumber) {
    displayMessage('Correct Number!');
    changeBackgroundColor('#60b347');
    secretNumBoxWidth('30rem');
    secretNumberBox(secretNumber);

    if (score > highscore) {
      highscore = score;
      document.querySelector('.highscore').textContent = highscore;
    }
  }

  // When guess is wrong.
  else if (guess !== secretNumber) {
    if (score > 1) {
      displayMessage(guess > secretNumber ? 'Too high!' : 'Too Low');
      score--;
      scoreCounter(score);
    } else {
      displayMessage('You have lost!');
      scoreCounter('0');
    }
  }
});

// Again button functionality
document.querySelector('.again').addEventListener('click', function () {
  score = 20;
  scoreCounter(score);
  randomNumGenerator();
  displayMessage('Start guessing...');
  secretNumberBox('?');
  document.querySelector('.guess').value = '';
  changeBackgroundColor('#222');
  secretNumBoxWidth('15rem');
});
