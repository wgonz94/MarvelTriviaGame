// Logic

// 1. Game starts when player hits "Let's Start"
// 2. When game starts, clock starts countdown
// 3. time is given to finish whole trivia
// 4. If time runs out before game ends, game ends
// 5. Player is able to choose 1/4 answers to each question
// 6. Player can see timer
// 7. Question displayed one at a time
//



$(document).ready(function(){

    //Variables needed
    let currentQuestion;
    let correctAns;
    let incorrectAns;
    let unanswered;
    let seconds;
    let time;
    let answered;
    let selected;
    let messages = {
        correct: "Correct!",
        incorrect: "Wrong Answer! ",
        endTime: "Out of Time!",
        finished: "Awesome! You finished. Let's see how you did."

    };


    let triviaVault = [
        {
            question: "",
            answerList: [],
            answer: "",
            image: "",
        }
    ]


    //Game Functions
    /////////////////

    

})