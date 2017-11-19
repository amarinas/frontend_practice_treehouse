function Question(text, choices, answer){
  this.text = text;
  this.choices = choices;
  this.answer = answer;
}


Questions.prototype.isCorrectAnswer = function(choice){
  return this.answer === choice;
}