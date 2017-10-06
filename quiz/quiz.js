// let answer = prompt('What programming language is the name of a gem?');
//
// if (answer.toLowerCase() === 'ruby' ){
//     document.write("<p>Thats right!</p>");
//
// }else{
//     document.write("<p>try Again!</p>");
//
// }

let answer1 = prompt('How many wheels in a car?');
let answer2 = prompt('How many wheels in a bike?');
let answer3 = prompt('what color is the sky?');
let answer4 = prompt('how many legs do you have?');
let answer5 = prompt('how many heart does doctor who has?');

let count = 0;

if (parseInt(answer1) === 4 ){
    count += 1
}

if (parseInt(answer2) === 2){
    count += 1
}

if (answer3.toUpperCase === "BLUE" ){
    count += 1
}
if (parseInt(answer4) === 2 ){
    count += 1
}
if (parseInt(answer5) === 2 ){
    count += 1
}

if (count === 5){
  document.write('<p>Congratulation you answered all questions correctly you get a GOLD CROWN!!!!</p>');

}else if (count  === 4 || count === 3) {
    document.write('<p>Congratulation you answered ' + count + ' questions correctly you get a SILVER CROWN!!!!</p>');

}else if (count  === 2 || count === 1){
    document.write('<p>Congratulation you answered ' + count + ' questions correctly you get a BRONZE CROWN!!!!</p>');

}else{
      document.write('<p>You answered ' + count + ' questions correctly Better luck next time!</p>')

}
