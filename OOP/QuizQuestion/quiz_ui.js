var QuizUi = {
  displayNext: function(){
    if (quiz.hasEnded()){
      this.displayScore;
    }else{
      this.displayQuestion();
      this.displayChoices();
      this.displayProgress();
    }
  },
  displayQuestion: funciton(){
    this.populateIdWithHTML("question", quiz.getCurrentQuestion().text);

  },
  displayChoices: function(){
    var choices = quiz.getCurrentQuestion().choices;

    for (var i = 0; i < choices.length; i++) {
      this.populateIdWithHTML("choices" + i, choices[i]);
      this.guessHandler("guess", + i, choices[i]);
    }
  },
  displayScore: function(){
    var gameOverHTML = "<h1>Game Over</h1>";
    gameOverHTML += "<h2> your score is: "+ quiz.score + "</h2>";
    this.populateIdWithHTML("quiz", gameOverHTML);
  },
  populateIdWithHTML: function(id,text){
    var element = document.getElementById(id);
    button.onclick = function(){
      quiz.guess(guess);
      QuizUi.displayNext();
    }
  },

  displayProgress: function(){
    var currentQuestionNumber = quiz. currentQuestionIndex +1;
    this.populateIdWithHTML("progress", "Question "+ currentQuestionNumber + " of " + quiz.questions.length);
  }
}
