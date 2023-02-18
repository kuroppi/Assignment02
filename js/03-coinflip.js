let coinFlip = Math.random();
let choice = (prompt('Heads or Tails?'));
choice = choice.toLowerCase();

// coinFlip: Heads will >= .5 | Tails will < .5
if (coinFlip >= .5) {
    if (choice === 'heads') {
        alert(`The flip was heads and you chose ${choice}... you win!`);
    } else {
        alert(`The flip was heads and you chose ${choice}... you lose!`);
    }
} else if (coinFlip < .5) {
    if (choice === 'tails') {
        alert(`The flip was tails and you chose ${choice}... you win!`);
    } else {
        alert(`The flip was tails and you chose ${choice}... you lose!`);
    }
}