function updateScoresFromLocalStorage() {
    let playerScore = parseInt(localStorage.getItem("player_Score")) || 0;
    let computerScore = parseInt(localStorage.getItem("computer_Score")) || 0;
    let playerScoreElement = document.querySelector(".win.you");
    let computerScoreElement = document.querySelector(".win.com");

    if (playerScoreElement && computerScoreElement) {
        playerScoreElement.textContent = playerScore;
        computerScoreElement.textContent = computerScore;
    }
};
window.addEventListener('load', function () {
    updateScoresFromLocalStorage();
});
function playAgain() {
    window.location.href = "main.html";
};

let playButton = document.getElementById("playbutton");
if (playButton) {
    playButton.addEventListener("click", playAgain);
};

function hurrayPage(){
    window.location.href = "celebration.html";
};
let nextButton = document.getElementById("next_button");
if(nextButton){
    nextButton.addEventListener("click", hurrayPage);
};

let playerChoice = localStorage.getItem("player_Choiced");
let computerChoice = localStorage.getItem("computer_Choiced");

let choiceStyleMap = {
    rock: {
        borderColor: '#0074B6',
        backgroundColor: 'white',
    },
    paper: {
        borderColor: '#ffa943',
        backgroundColor: 'white',
    },
    scissors: {
        borderColor: '#BD00FF',
        backgroundColor: 'white',
    },
};

let choiceImageMap = {
    rock: "rock.png",
    paper: "paper.png",
    scissors: "scissor.png",
};

let player = document.getElementById("player");
let computer = document.getElementById("computer");
if (playerChoice && computerChoice) {
    player.src = choiceImageMap[playerChoice];
    computer.src = choiceImageMap[computerChoice];
    
    function applyChoiceStyles(element, choice) {
        element.style.borderRadius = "50%";
        element.style.borderStyle = "solid";
        element.style.borderWidth = "17px";
        element.style.padding = "20px";
        element.style.height = "60px";
        element.style.width = "60px";
        element.style.backgroundColor = "white";
    
        if (choice === "rock") {
            element.style.borderColor = "#0074B6";
        } else if (choice === "scissors") {
            element.style.borderColor = "#BD00FF";
            element.style.transform = "rotate(5.27deg)";
        } else if (choice === "paper") {
            element.style.borderColor = "#ffa943";
        }
    }
    if (playerChoice) {
        applyChoiceStyles(player, playerChoice);
    }
    
    if (computerChoice) {
        applyChoiceStyles(computer, computerChoice);
    }  
};