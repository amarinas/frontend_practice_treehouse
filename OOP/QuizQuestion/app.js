var questions = [

  new Question("Who is the 12 doctor on doctor who?", ["Matt Smith", "David Tenant", "Peter Capaldi"], "Peter Capaldi"),
  new Question("What is the name of the new Star Trek TV show?", ["Voyager", "Enterprise", "Discovery"], "Discovery"),
];

//create Quiz
var quiz= new Quiz(questions)

//display Quiz
Quiz.UI.displayNext();
