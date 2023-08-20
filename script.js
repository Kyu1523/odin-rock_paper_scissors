let playerWins = 0;
let ComputerWins = 0;
for(let i = 0; i < 5; i++){
    let userChoice = prompt("Type either, rock, paper, or scissors");
    game(userChoice);
    console.log("Player has won: " + playerWins + " times. Computer has won: " + ComputerWins);
}

function getComputerChoice(){
    let choice = Math.floor(Math.random()*3);
    let CpuChoice;
    switch(choice){
        case 0:
            return CpuChoice = "rock";
        case 1:
            return CpuChoice = "scissors";
        case 2:
            return CpuChoice = "paper";
    }
    return "";
}

function playRound(user,Cpu){
    if(user == "rock"){
        if(Cpu == "rock"){
            return "Tie";
        }
        else if(Cpu == "paper"){
            return "Cpu Wins";
        }
        else{
            return "Player Wins";
        }
    }
    else if(user == "paper"){
        if(Cpu == "rock"){
            return "Player Wins";
        }
        else if(Cpu == "paper"){
            return "Tie";
        }
        else{
            return "Cpu Wins";
        }
    }
    else if(user == "scissors"){
        if(Cpu == "rock"){
            return "Cpu Wins";
        }
        else if(Cpu == "paper"){
            return "Player Wins";
        }
        else{
            return "Tie";
        }
    }
}

function game(userChoice){
let CpuChoice = getComputerChoice();
console.log("Computer chooses: " + CpuChoice);
let roundResult = playRound(userChoice.toLowerCase(),CpuChoice);
console.log(roundResult);
    if(roundResult == "Cpu Wins"){
        ComputerWins++;
    }
    else if(roundResult == "Player Wins"){
        playerWins++;
    }
}