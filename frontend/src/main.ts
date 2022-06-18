import './style.css'

let socket = null

interface CellItem {
    DATE: number,
    TIME: unknown,
    LAST: number,
    VOLUME: number,
    FLAGS: number
}

const insertLog = (data: string) => {
    const text = document.createElement('p')

    text.textContent = data

    document.body.insertAdjacentElement('beforeend', text)
}

const setupWebSocket = () => {
    console.log('setupWebSocket');
    socket = new WebSocket('ws://localhost:8080')
    socket.addEventListener('open', function () {
        // socket.value.send('Hello Server!')
    })
    socket.addEventListener('message', function (event) {
        try {
            console.log('event.data: ', JSON.parse(event.data));

            insertLog(event.data)
        } catch (e) {
            console.log('error = ', e)
        }
    })
}

setupWebSocket()