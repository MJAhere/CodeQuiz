function populate() {
    if(quiz.isEnded()) {
        showScores();
    }
    else {
        // question
        var element = document.getElementById("question");
        element.innerHTML = quiz.getQuestionIndex().text;

        // options
        var choices = quiz.getQuestionIndex().choices;
        for(var i = 0; i < choices.length; i++) {
            var element = document.getElementById("choice" + i);
            element.innerHTML = choices[i];
            guess("btn" + i, choices[i]);
        }

        showProgress();
    }
};

function guess(id, guess) {
    var button = document.getElementById(id);
    button.onclick = function() {
        quiz.guess(guess);
        populate();
    }
};


function showProgress() {
    var currentQuestionNumber = quiz.questionIndex + 1;
    var element = document.getElementById("progress");
    element.innerHTML = "Question " + currentQuestionNumber + " of " + quiz.questions.length;
};

function showScores() {
    var gameOverHTML = "<h1>Result</h1>";
    gameOverHTML += "<h2 id='score'> Your scores: " + quiz.score + "</h2>";
    var element = document.getElementById("quiz");
    element.innerHTML = gameOverHTML;
};

// show questions
var questions = [
    new Question("Commonly used data types DO NOT include?", ["strings", "booleans", "alerts", "numbers"], "alerts" ),
    new Question("The condition in an if / else statement is enclosed within ____.", ["quotes", "curly brackets", "parentheses", "square brackets"],  "parentheses"),
    new Question("Which language is primarily used in music and game production software?", ["C++", "javascript", "pascal", "swift"], "C++"),
    new Question("How much wood could a wood chuck, chuck, if a wood chuck could chuck wood?", ["no wood", "some wood", "wood chucks don't chuck", "All the wood"], "All the wood"),
    new Question("What is JQuery?",["All you can eat buffet.", "An illegal music site.", "A delicious type of cheese.", "A Javascript library that makes JS easier to use."], "A Javascript library that makes JS easier to use."),
];

// make quiz
var quiz = new Quiz(questions);

// show quiz
populate();
