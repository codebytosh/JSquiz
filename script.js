(function () {

    function Questions(question, answers, correctAnswer) {
        this.question = question;
        this.answers = answers;
        this.correctAnswer = correctAnswer;
    }


    Questions.prototype.displayQuestion = function () {
        console.log(this.question);
        for (var i = 0; i < this.answers.length; i++) {
            console.log(i + ': ' + this.answers[i]);
        }
        
    }

    Questions.prototype.checkAnswer = function (answer, score) {
        
        var totalScore;

        if (answer === this.correctAnswer) {
            console.log('Correct answer!');
            totalScore = score(true);
            
        } else {
            console.log('Wrong answer. Try again.');
            
            totalScore = score(false);
        }
        
        this.displayScore(totalScore);

    }
    
    Questions.prototype.displayScore = function(score) {
        console.log("Score: " + score);
        console.log("--------------------------------------------------------------------------------------------------------");
    }

    function nextQuestions() {

        var randomNum = Math.floor(Math.random() * allQuestions.length);

        allQuestions[randomNum].displayQuestion();

        var answer = prompt("Please select the correct answer. To leave type 'exit' :)");


        if (answer !== "exit") {
            allQuestions[randomNum].checkAnswer(parseInt(answer), totalScore);

            nextQuestions();

        }
    }
    
    function score() {
        var score = 0;
        return function(correct) {
            if (correct) {
                score++;
            }
            return score;
        }
    }
    
    
    var totalScore = score();

    var question1 = new Questions('In what year did Neil Armstrong and Buzz Aldrin land on the moon?', ['1950', '1982', '1969', '1971'], 2);
    
    var question2 = new Questions('Cynophobia is the fear of what kind of animal?', ['Mouse', 'Cockroach', 'Dog', 'Bird'], 2);
    
    var question3 = new Questions('Which singer rose to fame with his adaptation of the song "La Bamba" in 1958?', ['Sting', 'Ritchie Valens', 'Frank Sinatra', 'Elvis Presley'], 1);
    
    var question4 = new Questions('What is the name for a protein that acts as a biological catalyst?', ['Enzyme', 'Whey Protein', 'Casein', 'Amino Acid'], 0);
    
    var question5 = new Questions('The second atomic bomb ever used in war-time was dropped on what city?', ['Hiroshima', 'Tokyo', 'Kobe', 'Nagasaki'], 3);
    
    var allQuestions = [question1, question2, question3, question4, question5];

    nextQuestions();


})();
