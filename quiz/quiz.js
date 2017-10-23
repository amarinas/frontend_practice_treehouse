// let answer = prompt('What programming language is the name of a gem?');
//
// if (answer.toLowerCase() === 'ruby' ){
//     document.write("<p>Thats right!</p>");
//
// }else{
//     document.write("<p>try Again!</p>");
//
// }


let questions = [['How many wheels in a car?', 4],
                ['How many wheels in a bike?', 2],
                ['what color is the sky?', 'blue'],
                ['how many legs do you have?', 2],
                ['how many heart does doctor who has?', 2]];

let correctAnswer =0;
let question;
let answer;
let response;
let html;
let correct = [];
let wrong = [];

function print(message){
var outputDiv=  document.getElementById('output');
outputDiv.innerHTML = message;
}

// if (parseInt(answer1) === 4 ){
//     count += 1
// }
//
// if (parseInt(answer2) === 2){
//     count += 1
// }
//
// if (answer3.toUpperCase === "BLUE" ){
//     count += 1
// }
// if (parseInt(answer4) === 2 ){
//     count += 1
// }
// if (parseInt(answer5) === 2 ){
//     count += 1
// }
//
// if (count === 5){
//   document.write('<p>Congratulation you answered all questions correctly you get a GOLD CROWN!!!!</p>');
//
// }else if (count  === 4 || count === 3) {
//     document.write('<p>Congratulation you answered ' + count + ' questions correctly you get a SILVER CROWN!!!!</p>');
//
// }else if (count  === 2 || count === 1){
//     document.write('<p>Congratulation you answered ' + count + ' questions correctly you get a BRONZE CROWN!!!!</p>');
//
// }else{
//       document.write('<p>You answered ' + count + ' questions correctly Better luck next time!</p>')
//
// }

function buildList(arr){
  var listHTML = '<ol>';
  for (var i = 0; i < arr.length; i++) {
    listHTML += '<li>' + arr[i] + '</li>';

  }
  listHTML += '</ol>';
  return listHTML;

}

for (var i = 0; i < questions.length; i++) {
  question= questions[i][0];
  answer= questions[i][1];
  response = prompt(question);
  response = parseInt(response);
  if (response === answer) {
    correctAnswer += 1;
    correct.push(question);
  }else{
    wrong.push(question);
  }
}

html = "You got " + correctAnswer + " question(s) right.";
html += '<h2> You got these questions correct: </h2>';
html += buildList(correct);
html += '<h2> You got these question wrong: </h2>';
html += buildList(wrong);
print(html);
