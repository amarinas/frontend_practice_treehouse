let randomNumber = Math.floor(Math.random() * 6)+1;
let guess = prompt("I'm thinking of a number between 1 and 6. What is it?");
if(parseInt(guess)=== randomNumber){
  document.write("<p>You are correct lucky guess</p>");

}else{
  document.write("<p>sorry. the number was " + randomNumber);

}
