function randomNumber(upper) {
  return Math.floor( Math.random() * upper ) + 1;
}

let counter = 0;
while (counter <= 10 ) {
    document.write("<p>Now in loop #" + counter + "</p>");
    counter += 1;
}
