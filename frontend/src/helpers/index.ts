const svgns = "http://www.w3.org/2000/svg";

const createHLine = (y: string) => {
    const line = document.createElementNS(svgns, 'line')
    line.setAttribute('x2', '400')
    line.setAttribute('y2',y)
    line.setAttribute('y1',y)
    line.setAttribute('x1','0')
    line.setAttribute('stroke', '#cacaca')
    line.setAttribute('stroke-width','1')
    return line
}

const createVLine = (x: string) => {
    const line = document.createElementNS(svgns, 'line')
    line.setAttribute('x2', x)
    line.setAttribute('y2','400')
    line.setAttribute('y1','0')
    line.setAttribute('x1',x)
    line.setAttribute('stroke', '#cacaca')
    line.setAttribute('stroke-width','1')
    return line
}

export { createVLine, createHLine }