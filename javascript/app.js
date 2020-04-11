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


})