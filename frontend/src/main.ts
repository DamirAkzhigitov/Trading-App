import './style.scss'

const shipTable = document.querySelector('.ship-table')

console.log('shipTable:', shipTable);

// import { addGrid } from './grid'
// const svgns = "http://www.w3.org/2000/svg";
// const getRandom = (max: number) => Math.round(Math.random() * max)
// const line = document.querySelector('.line')
// const textElement = document.querySelector('#text')
// const testLine = document.getElementById('0')
// let currentLine: null | string = null
//
// const createNewLine = (x: string, y: string) => {
//     const randmonId = String(getRandom(1000))
//     const line = document.createElement('line')
//     line.setAttribute('x2', '2')
//     line.setAttribute('y2',y)
//     line.setAttribute('y1','400')
//     line.setAttribute('x1','2')
//     line.setAttribute('stroke', '#cacaca')
//     line.setAttribute('stroke-width','1')
//     line.id = randmonId
//     currentLine = randmonId
//
//     return line
//     // x1="2" x2="2" y1="400" y2="300" stroke="black" stroke-width="4"
// }
//
// let socket = null
//
// interface CellItem {
//     DATE: number,
//     TIME: unknown,
//     LAST: number,
//     VOLUME: number,
//     FLAGS: number
// }
//
// const insertLog = (data: string) => {
//     const text = document.createElement('p')
//
//     text.textContent = data
//
//     document.body.insertAdjacentElement('afterbegin', text)
// }
//
// const setupWebSocket = () => {
//     console.log('setupWebSocket');
//     socket = new WebSocket('ws://localhost:8080')
//     socket.addEventListener('open', function () {
//         // socket.value.send('Hello Server!')
//     })
//     socket.addEventListener('message', function (event) {
//         try {
//             console.log('event.data: ', JSON.parse(event.data));
//
//             insertLog(event.data)
//         } catch (e) {
//             console.log('error = ', e)
//         }
//     })
// }
//
// setupWebSocket()
//
// if (line) {
//     line.addEventListener('mousemove', (e) => {
//         const x = e.clientX - 10
//         const y = e.clientY - 30
//
//         // editLine.setAttribute('x1', x)
//         // editLine.setAttribute('y1', y)
//
//         if (textElement) {
//             textElement.setAttribute('x', x)
//             textElement.setAttribute('y', y)
//             textElement.textContent = `x: ${x}, y: ${y}`
//         }
//     })
//
//     line.addEventListener('click', (e) => {
//
//     })
//
//     addGrid(line, 3, 5)
//
// }
