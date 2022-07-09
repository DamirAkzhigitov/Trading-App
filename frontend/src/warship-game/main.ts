import '../style.scss'
const shipTable = document.querySelector('.self-table')

interface GameState {
    currentSelectedShip: string
    movingShip: boolean
    movingShipVertical: boolean
}

interface PlayerState {
    activeShips: string[]
}

interface Players {
    player1: PlayerState
    player2: PlayerState
}


interface WarShipsCount {
    [key: string]: number
}

const userState: GameState = {
    currentSelectedShip: '',
    movingShip: false,
    movingShipVertical: true
}

const players: Players = {
    player1: {
        activeShips: []
    },
    player2: {
        activeShips: []
    }
}
const sizeToName: {[key: number]: string} = {
    1: 'ship-4',
    2: 'ship-3',
    3: 'ship-2',
    4: 'ship-1'
}

const shipSizes: WarShipsCount = {
    'ship-1': 4,
    'ship-2': 3,
    'ship-3': 2,
    'ship-4': 1
}

const availableWarShips: WarShipsCount = {
    'ship-1': 1,
    'ship-2': 2,
    'ship-3': 3,
    'ship-4': 4
}



const renderShip = (table: Element, coordinates: string, size: number) => {
    console.log('table:', table)
    table.querySelectorAll('.active').forEach((cell) => {
        cell.classList.remove('active')
    })

    if (userState.movingShipVertical) {
        const [, row, column] = coordinates
        const shipCoordinates = []

        for (let i = 0; i < size; i++) {
            const renderRow = String(Number(row) + i)

            shipCoordinates.push(renderRow + column)
        }

        shipCoordinates.forEach((targetCellClass) => {
            const shipPart = table.querySelector(`.c${targetCellClass}`)

            if (shipPart) {
                shipPart.classList.add('active')
            }
            // table.querySelector(`.c${targetCellClass}`).style.background = 'black'
        })

        console.log('shipCoordinates: ', JSON.stringify(shipCoordinates))

    } else {

    }
}

const updateShipCountPanel = () => {
    const panels = document.querySelectorAll('.war-port td')
    if (panels) panels.forEach((ship) => {
        const type = ship.className
        const count = availableWarShips[type]
        ship.textContent = String(count)
    })
}

const placeShipOnBoard = (table: Element) => {
    const shipCoordinates: string[] = []

    table.querySelectorAll('.active').forEach((activeCell) => {
        const cellClassList = activeCell.className.split(' ')
        shipCoordinates.push(cellClassList[0])
        activeCell.classList.remove('active')
        activeCell.classList.add('ship-part')
    })

    const shipType = sizeToName[shipCoordinates.length]

    availableWarShips[shipType] = availableWarShips[shipType] - 1
    players.player1.activeShips = shipCoordinates



    console.log('shipCoordinates: ', shipCoordinates)
}

document.body.addEventListener('keydown', (e) => {
    // console.log(e);
    // console.log('');
    if (e.keyCode === 82) {
        console.log('rotate');
    }
})

const warPortTable = document.querySelector('.war-port')

if (warPortTable) {
    const shipsPanels = warPortTable.querySelectorAll('td')

    console.log('shipsPanels: ', shipsPanels);

    shipsPanels.forEach((shipPanel) => {
        const type = shipPanel.className
        shipPanel.addEventListener('click', () => {
            console.log('click, panel: ', type);

            if (!userState.currentSelectedShip) {

                userState.currentSelectedShip = type
                userState.movingShip = true

                availableWarShips[type] = Number(availableWarShips[type] - 1)

            } else if (userState.currentSelectedShip === type) {

                userState.movingShip = false
                userState.currentSelectedShip = ''

                availableWarShips[type] = availableWarShips[type] + 1
            } else {
                const last =  userState.currentSelectedShip
                availableWarShips[last] = availableWarShips[last] + 1

                userState.currentSelectedShip = type
                userState.movingShip = true

                availableWarShips[type] = Number(availableWarShips[type] - 1)
            }
            updateShipCountPanel()
        })
    })

    updateShipCountPanel()
}

if (shipTable) {
    const cells = shipTable.querySelectorAll('td')

    shipTable.querySelectorAll('tr').forEach((row, indexRow) => {
        row.querySelectorAll('td').forEach((cell,indexCell) => {
            cell.className = 'c' + String(indexRow) + String(indexCell)
        })
    })

    cells.forEach((cell) => {
        // console.log('cell, cell:', cell);
        cell.addEventListener('click', () => {
            console.log('click');
            // cell.classList.add('black-border')
            if (userState.movingShip) {
                placeShipOnBoard(shipTable)
                updateShipCountPanel()
            }

        })
        cell.addEventListener('mouseenter', () => {
            const [, rowNumber, cellNumber] = cell.className
            const sizeOfShip = shipSizes[userState.currentSelectedShip]
            if (availableWarShips[userState.currentSelectedShip] < 0) {
                console.log('больше недоступно')
                return
            }

            if ((Number(rowNumber) + (sizeOfShip - 1)) > 9) {
                const forceRow = String(9 - (sizeOfShip - 1))
                const newCoord = 'c'+ forceRow + cellNumber
                renderShip(
                    shipTable,
                    newCoord,
                    sizeOfShip
                )

            } else {
                renderShip(
                    shipTable,
                    cell.className,
                    sizeOfShip
                )
            }


            // console.log('mouseEnter, cell: ', cell);
            // cell.style.border = '1px solid black'
            // console.log('set border');
        })
        // cell.addEventListener("mouseleave", () => {
        //     console.log('mouseleave, cell: ', cell);
        //     cell.style.border = '1px solid rgb(190, 190, 190)'
        // })
    })
}

