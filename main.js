let openRulesTab = document.querySelector("#rules_button");
let closeRulesTab = document.querySelector("#close");

openRulesTab.addEventListener("click",function(){
    document.body.classList.add("rulesTab-active");
});
closeRulesTab.addEventListener("click",function(){
    document.body.classList.remove("rulesTab-active");
});

let playerScore = 0;
let computerScore = 0;
let choices = ["rock", "paper", "scissors"];

document.getElementById("rock_option").addEventListener("click",function(){
    playRound("rock");
    updateScores(); 
});

document.getElementById("paper_option").addEventListener("click",function(){
    playRound("paper");
    updateScores();
});
document.getElementById("scissors_option").addEventListener("click",function(){
    playRound("scissors");
    updateScores(); 
});

function playRound(playerChoice) {
    let computerChoice = choices[Math.floor(Math.random() * choices.length)];
    localStorage.setItem("computer_Choiced", computerChoice);

    if (playerChoice === computerChoice) {
        window.location.href = "tie.html"
    } else if (
        (playerChoice === "rock" && computerChoice === "scissors") ||
        (playerChoice === "paper" && computerChoice === "rock") ||
        (playerChoice === "scissors" && computerChoice === "paper")
    ) {
        playerScore++;
        window.location.href = "playerWon.html";
    } else {
        computerScore++;
        window.location.href = "computerWon.html";
    }
    document.querySelector(".win.you").textContent = playerScore;
    document.querySelector(".win.com").textContent = computerScore;
}

function updateScores(){

    localStorage.setItem('player_Score', playerScore);
    localStorage.setItem('computer_Score', computerScore);

}
window.addEventListener('load', function(){
    let storedPlayerScore = localStorage.getItem('player_Score');
    let storedComputerScore = localStorage.getItem('computer_Score');

    if (storedPlayerScore !== null) {
        playerScore = parseInt(storedPlayerScore);
        document.querySelector(".win.you").textContent = playerScore;
    }
    if (storedComputerScore !== null){
        computerScore = parseInt(storedComputerScore);
        document.querySelector(".win.com").textContent = computerScore
    }
});
document.getElementById("rock_option").addEventListener("click", function () {
    localStorage.setItem("player_Choiced", "rock");
});

document.getElementById("scissors_option").addEventListener("click", function () {
    localStorage.setItem("player_Choiced", "scissors");
});

document.getElementById("paper_option").addEventListener("click", function () {
    localStorage.setItem("player_Choiced", "paper");
});