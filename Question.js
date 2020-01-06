function Question(text, choices, answer) {
  this.text = text;
  this.choices = choices;
  this.answer = answer;
}

Question.prototype.isCorrectAnswer = function(choice) {
  return this.answer === choice;
}
























// var questions = [
//     {
//       title: "Commonly used data types DO NOT include:",
//       choices: ["strings", "booleans", "alerts", "numbers"],
//       answer: "alerts"
//     },
//     {
//       title: "The condition in an if / else statement is enclosed within ____.",
//       choices: ["quotes", "curly brackets", "parentheses", "square brackets"],
//       answer: "parentheses"
//     },
//     {
//         Title: "Which data types are able to be used in an array?",
//         Choices: ["None", "strings,booleans and numbers", "numbers only", "strings only"],
//         answer: "strings, booleans and numbers"
//     },
//     {
//         Title: "How much wood could a wood chuck, chuck, if a wood chuck could chuck wood?",
//         Choices: ["no wood", "some wood", "wood chucks don't chuck", "All the wood"],
//         answer: "All the wood"
//     },
//     {
//       Title: "What is JQuery?",
//       Choices: ["All you can eat buffet.", "An illegal music site.", "A delicious type of cheese.", "A Javascript library that makes JS easier to use."],
//       answer: "A Javascript library that makes JS easier to use."
//     }
//   ];
  