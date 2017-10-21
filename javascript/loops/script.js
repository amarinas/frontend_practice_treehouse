let upper = 10000;
let randomNumber = getRandomNumber(upper);
let guess;
let attempts = 0;

function getRandomNumber(upper) {
  return Math.floor( Math.random() * upper ) + 1;
}

while (guess !== randomNumber) {
    guess = getRandomNumber(upper);
    attempts += 1;
}
document.write("<p> The random number was "  + randomNumber + " </p>");
document.write("<p> It took the computer " + attempts + " attemps to guess the number</p>");
