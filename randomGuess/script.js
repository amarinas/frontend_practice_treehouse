let guess = prompt("I'm thinking of a number between 1 and 6. What is it?");
let correctGuess = false;
let randomNumber = Math.floor(Math.random() * 6)+1;


if(parseInt(guess)=== randomNumber){
  correctGuess = true;

}else if(parseInt(guess) < randomNumber){
    let guessMore = prompt('Try again. the number i am thinking of is more than ' + guess);
    if (parseInt(guessMore)=== randomNumber){
        correctGuess= true;
      }

}   else if(parseInt(guess) > randomNumber){
  let guessLess = prompt('Try again. the number i am thinking of is less than ' + guess);
  if (parseInt(guessLess) === randomNumber){
      correctGuess = true;
  }
}
if (correctGuess){
  document.write("<p>You are correct lucky guess</p>");
}else{
  document.write('<p>sorry. the number was ' + randomNumber + '.</p>');

}
