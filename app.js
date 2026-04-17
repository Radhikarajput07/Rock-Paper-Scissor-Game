let userScore = 0;
let compScore = 0;

const choices = document.querySelectorAll(".choice");
const msg = document.querySelector("#msg");

const userScorePara = document.querySelector("#user-score");
const compScorePara = document.querySelector("#comp-score");

const resetBtn = document.querySelector("#reset-btn");

const genCompChoice = () => {
    const options = ["rock","paper","scissors"];
    const randIdx = Math.floor(Math.random()*3);
    return options[randIdx];
};

const drawGame = () => {
    console.log("game was draw.");
    msg.innerText = "game was draw.play again.";
    };

const showWinner = (userWin, userChoice, compChoice) => {
    if(userWin) {
        userScore++;
        userScorePara.innerText = userScore;
       
        msg.innerText = `you win! your ${userChoice} beats ${compChoice}`;
        msg.style.backgroundColor = "green";
    } else {
        compScore++;
        compScorePara.innerText = compScore;
        
        msg.innerText = `you lost. ${compChoice} beats your ${userChoice}`;
        msg.style.backgroundColor = "red";
        checkWinner();
    }
};

const playGame = (userchoice) => {
    
    //generate computer choice
    const compChoice = genCompChoice();
    console.log("comp choice =", compChoice);

    if (userchoice === compChoice) {
        //draw game
        drawGame();
    } else {
        let userWin = true;

        if (userchoice === "rock") {
            //scissors paper
            userWin = compChoice === "paper" ? false : true;
        } else if (userchoice === "paper") {   
            //rock scissors
            userWin = compChoice === "scissors" ? false : true;
        } else {
            //rock paper
            userWin = compChoice === "rock" ? false : true;
        }
        showWinner(userWin, userchoice, compChoice);
        checkWinner();
    }
};

const checkWinner = () => {
    if (userScore === 5) {
        msg.innerText = "🎉 Winner is YOU!";
        disableGame();
    } else if (compScore === 5) {
        msg.innerText = "🤖 Winner is COMPUTER!";
        disableGame();
    }
};
const disableGame = () => {
    choices.forEach((choice) => {
        choice.style.pointerEvents = "none"; // click band
    });
};


const resetGame = () => {
    userScore = 0;
    compScore = 0;

    userScorePara.innerText = 0;
    compScorePara.innerText = 0;

    msg.innerText = "Play your move";
    msg.style.backgroundColor = "#081b31";

    // game enable again
    choices.forEach((choice) => {
        choice.style.pointerEvents = "auto";

    });
};

choices.forEach((choice) => {
    choice.addEventListener("click", () => {
        const userChoice = choice.getAttribute("id");
        playGame(userChoice);
    

    resetBtn.addEventListener("click", resetGame);

});
});
