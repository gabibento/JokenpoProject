var playerName;

var playerChoice = 0;

var computerChoice = 0;

var playerPoints = 0;
var computerPoints = 0;

function message(text){
    document.getElementById('message').innerHTML = text
    document.getElementById('message').classList.add('show-message')
}
function defineName(name){
    document.getElementById('player-name').innerHTML = name
}

function initGame() {
    playerName = prompt('What is your name?');
    if (!playerName) {
        playerName = 'Player';
    }

    message(`Welcome ${playerName}! Are you ready? Choose an option above...`);
    defineName(playerName);
}

initGame(); 


function randomPlay(min, max){
    return Math.floor(Math.random() * (max - min + 1) + min)
}

function calcChoice(player, computer){
    if(player == 1 && computer == 1){
        return 0;
    }
    else if(player == 1 && computer == 2){
        return 2;
    }
    else if(player == 1 && computer == 3){
        return 1;
    }
    else if(player == 2 && computer == 1){
        return 1;
    }
    else if(player == 2 && computer == 2){
        return 0;
    }
    if(player == 2 && computer == 3){
        return 2;
    }
    else if(player == 3 && computer == 1){
        return 2;
    }
    else if(player == 3 && computer == 2){
        return 1;
    }
    if(player == 3 && computer == 3){
        return 0;
    }
}
function sumPlayerPoints(){
    playerPoints++;
    document.getElementById('player-points').innerHTML = playerPoints
}
function sumComputerPoints(){
    computerPoints++;
    document.getElementById('computer-points').innerHTML = computerPoints
}

function select(type, choice){
    document.getElementById(`${type}-choice-${choice}`).classList.add('selected')
}
function unselect(type){
    document.getElementById(`${type}-choice-1`).classList.remove('selected')
    document.getElementById(`${type}-choice-2`).classList.remove('selected')
    document.getElementById(`${type}-choice-3`).classList.remove('selected')
}

function play(choice){
   
    playerChoice = choice;
    select('player', playerChoice)

    computerChoice = randomPlay(1, 3)
    select('computer', computerChoice)

    var winner = calcChoice(playerChoice, computerChoice);
    
    if(winner == 0){
        message('Tied')
    }
    if(winner == 1){
        message(`Point for ${playerName}`)
        sumPlayerPoints()
    }
    if(winner == 2){
        message('Point for Computer')
        sumComputerPoints()
    }
    setTimeout(function(){
        unselect('player', playerChoice)
        unselect('computer', computerChoice)
        message(`${playerName}, choose an option above...`)
    }, 2000)

}
document.getElementById('player-choice-1').onclick = function() {play(1)}
document.getElementById('player-choice-2').onclick = function() {play(2)}
document.getElementById('player-choice-3').onclick = function() {play(3)}