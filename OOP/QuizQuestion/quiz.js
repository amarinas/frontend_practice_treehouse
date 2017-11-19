fuction Quiz(questions){
  this.score =0;
  this.questions = questions;
  this.currentQuestionIndex = 0;

}

Quiz.prototype.guess = fucntion (answer){
  if(this.getCurrentQuestion().isCorrectAnswer(answer)){
    this.score++;

  }
  this.currentQuestionIndex++;
}


Quiz.prototype.getCurrentQuestion = funciton() {
  return this.question[this.currentQuestionIndex];
}

Quiz.prototype.hasEnded = function(){
  return this.currentQuestionIndex >= this.question.length;
}
