function Quiz(questions) {
    this.score = 0;
    this.questions = questions;
    this.questionIndex = 0;
}
 
Quiz.prototype.getQuestionIndex = function() {
    return this.questions[this.questionIndex];
}
 
Quiz.prototype.guess = function(answer) {
    if(this.getQuestionIndex().isCorrectAnswer(answer)) {
        this.score++;
    }
 
    this.questionIndex++;
}
 
Quiz.prototype.isEnded = function() {
    return this.questionIndex === this.questions.length;
}
 
 
function Question(text, choices, answer) {
    this.text = text;
    this.choices = choices;
    this.answer = answer;
}
 
Question.prototype.isCorrectAnswer = function(choice) {
    return this.answer === choice;
}
 
 
function populate() {
    if(quiz.isEnded()) {
        showScores();
    }
    else {
        
        var element = document.getElementById("question");
        element.innerHTML = quiz.getQuestionIndex().text;
 
        
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
 

var questions = [
    new Question("What 'OS' means", ["Operating system", "Operator system","Operation system", "Operate system"], "Operating system"),
    new Question("What is 'Android?'", ["A smartphone", "A PC", "A mobile OS", "Doesn't exist anymore"], "A mobile OS"),
    new Question("Qualcomm.....", ["Snapdeal", "Snapdragon","Snapsnack", "Snapdragonfly"], "Snapdragon"),
    new Question("Which 'Samsung Galaxy' has been withdrawn from the market in 2016?", ["Galaxy S7", "Galaxy S7 Edge", "Galaxy S7/S7 Edge", "Galaxy Note 7"], "Galaxy Note 7"),
    new Question("Did 'Steve Jobs' and 'Bill Gates' ever meet?", ["True", "False", "Steve Jobs refused", "Bill Gates refused"], "True"),
    new Question("Which company did 'Pete Lau' and 'Carl Pei' founded?", ["Xiaomi", "Meizu", "OnePlus", "Motorola"], "OnePlus"),
    new Question("What's the name of the first version of the 'Windows' operating system?", ["Windows One", "Windows 1985", "Windows 1.0", "Windows Prototype"], "Windows 1.0"),
    new Question("What's the current version of 'macOS'?", ["Snow Leopard", "El Capitan", "Big Sur", "Yosemite"], "Big Sur"),
    new Question("How many 'MB' is a 'GB' of data?", ["1023 MB", "1021 MB", "1022 MB", "1024 MB"], "1024 MB"),
    new Question("What does 'USB' mean?", ["Universal Serial Binary", "Universal Serial Bus", "Universal Series B", "Universal Studio B"], "Universal Serial Bus"),
    new Question("In what year was 'Windows Phone' marketed?", ["2007", "2004", "2010", "2008"], "2010"),
    new Question("Which of these 'Intel' processors does not exist", ["Intel Pentium", "Intel Celeron", "Intel SpeedPro", "Intel Xeon"], "Intel SpeedPro"),
    new Question("Only one of these acronyms does not exist, which one?", ["USB", "HTML", "CSS", "KNSXX"], "KNSXX"),
    new Question("What is the codename of the new 'Windows 11'?", ["Sun Valley", "Sun Sunset", "Windows W", "Windows OS Eleven"], "Sun Valley"),
    new Question("Has 'Samsung' ever risked bankruptcy?", ["No, never", "Yes, in 1993", "Yes, in 1995", "None of the above"], "None of the above"),
    new Question("Only one of the following 'Windows' versions exist, which one?", ["Windows Versa", "Windows Vasta", "Windows Vista", "Windows Tale"], "Windows Vista"),
    new Question("Which of the following 'iPhones' never existed?", ["iPhone 8", "iPhone SE", "iPhone 5C", "iPhone 6X"], "iPhone 6X"),
    new Question("Which nationality is the company 'Mediatek'?", ["Taiwanese", "French", "Swedish", "American"], "Taiwanese"),
    new Question("Which of the following companies was bought by 'Steve Jobs'?", ["Disney", "Pixar", "National Geographic", "DreamWorks"], "Pixar"),
    new Question(" THE IMPOSSIBLE QUESTION: What is 'Bill Gates' full name? ", ["William Henry Gates II", "William Henry Gates III", "William Henry Gates I", "William Henry Gates IV"], "William Henry Gates III"),
];

 

var quiz = new Quiz(questions);
 

populate();