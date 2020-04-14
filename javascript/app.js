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
            question: "What is Spiderman's True Identity?",
            answerList: ["Tony Stark", "Flash Thompson", "Eddie Brock", "Peter Parker"],
            answer: 3,
            // image: "",
        },
        {
            question: "Which one of these characters is NOT a superhero?",
            answerList: ["Iceman", "The Punisher", "DareDevil", "Black Panther"],
            answer: 1,
        },
        {
            question: "Who created Ultron?",
            answerList: ["Tony Stark", "Reed Richards", "Hank Pym", "The Mandarin"],
            answer: 2,
        },
        {
            question: "What is the Matt Murdocks Occupation?",
            answerList: ["Detective", "Lawyer", "Boxer", "Judge"],
            answer: 1,
        },
        {
            question: "Who founded the X-Men?",
            answerList: ["S.H.E.I.L.D.", "Spiderman", "X-Force", "Charles Xavier"],
            answer: 3,

        },
        {
            question: "Who was the first Super Solider?",
            answerList: ["Wolverine", "Bucky Barnes", "Steve Rogers", "Natasha Romanova"],
            answer: 2,

        },
        {
            question: "Who is the Leader of the Fantastic 4?",
            answerList: ["Mr. Fantastic", "Johnny Storm", "Danny Rand", "Dr. Doom"],
            answer: 0,

        }
    ]


    //Game Functions
    /////////////////

    //hides game area on initial page load
    $("#gameCol").hide();

    //OnClick event to start new Game
    $("#startBtn").on("click", function() {
        $(this).hide();
        newGame();
    })

    //reset button to start new Game
    $("#resetBtn").on("click", function() {
        $(this).hide();
        newGame();
    })

    // displays new game, clears areas of the Game
    function newGame(){
        $("#gameCol").show();
        $("#endMessage").empty();
        $("#correct").empty();
        $("#incorrect").empty();
        $("#unanswered").empty();
        currentQuestion = 0;
        correctAns = 0;
        incorrectAns = 0;
        unanswered = 0;
        newQuestion();
    }

    // next question
    function newQuestion(){
        $("#message").empty();
        $("#revealedAnswer").empty();
        answered = true;

        //displays new question
        $("#currentQuestion").html("Question " + (currentQuestion + 1) + " of " + triviaVault.length);
        $(".question").html(triviaVault[currentQuestion].question)

        //generates answer choices for each new question.
        for(let i = 0; i < 4; i++){
            let choices = $("<div>");
            choices.text(triviaVault[currentQuestion].answerList[i]);
            choices.attr({"data-index": i });
            choices.addClass("thisChoice");
            $(".answerChoices").append(choices)
        }

        //countDown Timer
        countDown();

        //stops timer and reveals answer
        $(".thisChoice").on("click", function() {
            selected = $(this).data("index");
            clearInterval(time);
            revealPage();
        })
    }

    function countDown() {
        seconds = 15;
        $("#timer").html("00:" + seconds);
        answered = true;
        //delay timer 
        time = setInterval(showCountdown, 1000);
    }

    function showCountdown() {
        seconds--;

        if(seconds < 10) {
            $("#timer").html("00:0" + seconds)
        } else{
            $("#timer").html("00:" + seconds)
        }

        if(seconds < 1) {
            clearInterval(time);
            answered = false;
            revealPage();
        }
    }

    //displays correct answer with reveal page
    function revealPage() {
        $("#currentQue").empty();
        $(".thisChoice").empty();
        $(".question").empty();

        let rightAnswerText = triviaVault[currentQuestion].answerList[triviaVault[currentQuestion].answer];
        let rightAnswerIndex = triviaVault[currentQuestion].answer;

        //check to see if user choice is correct, incorrect, or unanswered
        if((selected == rightAnswerIndex) && (answered === true)){
            correctAns++;
            $("#message").html(messages.correct);
        } else if((selected != rightAnswerIndex) && (answered === true)){
            incorrectAns++;
            $("#message").html(messages.incorrect);
            $("#revealedAnswer").html("The correct answer was: " + rightAnswerText)
        } else {
            unanswered++;
            $("#message").html(messages.incorrect);
            $("#revealedAnswer").html("The correct answer was: " + rightAnswerText)
            answered = true;
        }

        if(currentQuestion == (triviaVault.length-1)){
            setTimeout(scoreboard, 6000);
        } else {
            currentQuestion++
            setTimeout(newQuestion, 6000);
        }

    }

    //display scores of the quiz/trivia
    function scoreboard() {

        $("#timer").empty();
        $("#message").empty();
        $("#revealedAnswer").empty();
        $("#correct").empty();

        $("#endMessage").html(messages.finished);
        $("#correct").html("Correct Answers: " + correctAns);
        $("#incorrect").html("Incorrect Answers: " + incorrectAns);
        $("#unanswered").html("Unanswered: "+ unanswered);

        $("#resetBtn").addClass("restart");
        $("#resetBtn").show();
        $("#resetBtn").html("Play Another Game?")

    }



})