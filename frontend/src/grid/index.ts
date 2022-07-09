import { createVLine, createHLine } from "../helpers";

const addGrid = (target: HTMLElement, rows: number, columns: number) => {
    const size = 400
    const vStep = Math.round(size / rows)
    const hStep = Math.round(size / columns)
    for (let i = 0; i < rows; i++) {
        const line = createVLine(String(vStep * i))
        target.insertAdjacentElement('beforeend', line)
    }
    for (let i = 0; i < columns; i++) {
        const line = createHLine(String(hStep * i))
        target.insertAdjacentElement('beforeend', line)
    }

}

export { addGrid }