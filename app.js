const gamesBoardContainer = document.querySelector('#gamesboard-container')
const optionContainer = document.querySelector('.option-container')
const flipButton = document.querySelector('#flip-button')

let angle = 0;
function flip() {
    const optionShips=Array.from(optionContainer.children)
    angle = angle === 90  ? 0 : 90;
    optionShips.forEach(optionShip=> optionShip.style.transform = `rotate(${angle}deg)`)
}

const width = 10;
function createBoard(color, user) {
    const gameBoardContainer = document.createElement('div')
    gameBoardContainer.classList.add('game-board')
    gameBoardContainer.style.backgroundColor = color
    gamesBoardContainer.append(gameBoardContainer)
}
createBoard('yellow', 'player');
createBoard('pink', 'computer');

flipButton.addEventListener('click', flip)