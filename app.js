//Javascript Code For Rock Paper Scissors Game
//Created by Bahadir Omer Cakmak 49897
let user_score = 0;
let comp_score = 0;
let userScoreSpan = document.getElementById("user-score");
let compScoreSpan = document.getElementById("comp-score");
const rock = document.getElementById("Rock");
const scissors = document.getElementById("Scissors");
let scoreboard = document.getElementById("score-board");
const paper = document.getElementById("Paper");
let allChoices = document.getElementById("allChoices");
let results_text = document.querySelector("#results > h2");
let text_exp = document.getElementById("text-exp");
let compArray = ["Rock", "Scissors", "Paper"];
let user_value;
let userpick;
let userValue;
let comp_Choice;
let compick;

function compChoice() {
    comp_Choice = compArray[randomNumber()];
    return comp_Choice
}

function randomNumber() {
    let random_Number = Math.floor(Math.random() * 3);
    return random_Number;
}

function game(userValue) {
    compick = compChoice();
    let lastChoice = userValue + compick;

    switch (lastChoice) {

        case "RockScissors":
        case "ScissorsPaper":
        case "PaperRock":
            console.log(lastChoice);
            userpick = userValue;

            winnerOption();
            break;

        case "RockRock":
        case "ScissorsScissors":
        case "PaperPaper":
            console.log(lastChoice);
            userpick = userValue;

            drawOption();
            break;

        case "RockPaper":
        case "ScissorsRock":
        case "PaperScissors":
            console.log(lastChoice);
            userpick = userValue;

            looserOption();
            break;

        default:

            break;
    }
}

function Blue() {
    document.body.style.backgroundImage = "url('https://i.pinimg.com/originals/d4/98/f5/d498f54a546cd21ac88a1be0d754fed4.jpg')";

}
function Green() {
    document.body.style.backgroundImage = "url('https://wallpaperset.com/w/full/3/a/6/274813.jpg')";

}
function Yellow() {
    document.body.style.backgroundImage = "url('https://wallpapercave.com/wp/wp2580054.png')";

}
function Dark() {
    document.body.style.backgroundImage = "url('https://images.unsplash.com/photo-1451187580459-43490279c0fa?ixlib=rb-1.2.1&auto=format&fit=crop&w=2252&q=80')";

}
function winnerOption() {
    user_score++;
    userScoreSpan.innerHTML = (user_score);
    results_text.innerHTML = userpick + " Beats " + compick + " You Win ! ";
    userScoreSpan.classList.add("makebigger");
    scoreboard.classList.add("wiinnerOption");
    rock.classList.add("wiinnerOption");
    paper.classList.add("wiinnerOption");
    scissors.classList.add("wiinnerOption");
    setTimeout(function () {
        userScoreSpan.classList.remove("makebigger");
        scoreboard.classList.remove("wiinnerOption");
        rock.classList.remove("wiinnerOption");
        paper.classList.remove("wiinnerOption");
        scissors.classList.remove("wiinnerOption");
    }, 700);


}

function drawOption() {

    results_text.innerHTML = userpick + " Draw " + compick + " You Draw ! ";
    scoreboard.classList.add("drawOption");
    rock.classList.add("drawOption");
    paper.classList.add("drawOption");
    scissors.classList.add("drawOption");
    setTimeout(function () {
        scoreboard.classList.remove("drawOption");
        rock.classList.remove("drawOption");
        paper.classList.remove("drawOption");
        scissors.classList.remove("drawOption");
    }, 700);
}
function looserOption() {
    comp_score++;
    compScoreSpan.innerHTML = (comp_score);
    results_text.innerHTML = userpick + " Loses to " + compick + " You Lose ! ";
    compScoreSpan.classList.add("makebigger2");
    scoreboard.classList.add("loserOption");
    rock.classList.add("loserOption");
    paper.classList.add("loserOption");
    scissors.classList.add("loserOption");
    setTimeout(function () {
        compScoreSpan.classList.remove("makebigger2");
        scoreboard.classList.remove("loserOption");
        rock.classList.remove("loserOption");
        paper.classList.remove("loserOption");
        scissors.classList.remove("loserOption");
    }, 700);

}


rock.addEventListener("click", function () {
    game("Rock");
})
scissors.addEventListener("click", function () {
    game("Scissors")
});
paper.addEventListener("click", function () {
    game("Paper")
});