

const gamesBoardContainer = document.querySelector('#gamesboard-container')
const optionContainer = document.querySelector('.option-container')
const flipButton = document.querySelector("#flip-button")

let angle = 0
winner = true
function flip() {
    const optionShips = Array.from(optionContainer.children);
    angle = angle === 0 ? 90 : 0
    optionShips.forEach(optionShip => optionShip.style.transform = `rotate(${angle}deg)`)
}
flipButton.addEventListener('click', flip)

const width = 10
function createBoard(color, user) {
    const gameBoardContainer = document.createElement('div')
    gameBoardContainer.classList.add('game-board')
    gameBoardContainer.style.backgroundColor = color
    gameBoardContainer.id = user
    for(let i = 0; i < width * width; i++){
        const block = document.createElement('div')
        block.classList.add('block')
        block.id = i
        gameBoardContainer.append(block)
    }
    gamesBoardContainer.append(gameBoardContainer)
}
createBoard('yellow', 'player')
createBoard('pink', 'computer')

// Creating Ships
class Ship {
    constructor(name, length){
        this.name = name;
        this.length = length;
    }
}

const destroyer = new Ship("destroyer", 2)
const submarine = new Ship("cruiser", 3)
const cruiser = new Ship("cruiser", 3)
const battleship = new Ship("battleship", 4)
const carrier = new Ship("carrier", 5)
const ships = [destroyer, submarine, cruiser, battleship, carrier]

function addShipPiece(ship) {
    const allBoardBlocks = document.querySelectorAll('#computer div')
    // console.log(allBoardBlocks)
    let randomBoolean = Math.random() < 0.5
    let isHorizontal = randomBoolean
    let randomStartIndex = Math.floor(Math.random() * width * width);
    console.log(randomStartIndex)
    let shipsBlocks = []

    let validStart = isHorizontal ? randomStartIndex <= width * width - ship.length ? randomStartIndex :
        width * width  - ship.length : 
        randomStartIndex <= width * width - width * ship.length ? randomStartIndex :
        randomStartIndex - ship.length * width + width
    
    for(let i = 0; i < ship.length; i++){
        if(isHorizontal) {
            shipsBlocks.push(allBoardBlocks[Number(validStart) + i])
        } else {
            shipsBlocks.push(allBoardBlocks[Number(validStart) + i * width])
        }
    }
    if(isHorizontal){
        shipsBlocks.every((_shipBlock, index) => 
            shipBlocks[0].id % width !== width - (shipBlocks.length - (index + 1)))
    }
    shipsBlocks.forEach(shipBlock => {
        shipBlock.classList.add(ship.name)
        shipBlock.classList.add('taken')
    })
}
ships.forEach(ship => addShipPiece(ship))


console.log(ships)

