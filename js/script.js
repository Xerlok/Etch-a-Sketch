const container = document.querySelector('#grid-container');
const btns = document.querySelectorAll('.grid-size');


function start(){
    makeGrid(16);
    changeGridSize();
    
    const eraseButton = document.querySelector('#erase');
    eraseButton.addEventListener('click', () => {eraseAll()})
}

function makeGrid(gridSize) {
    container.style.setProperty('--grid-rows', gridSize);
    container.style.setProperty('--grid-cols', gridSize);
    for (i = 0; i < (gridSize * gridSize); i++) {
        let cell = document.createElement("div");
        container.appendChild(cell).className = "grid-item";
    };
    draw();
}

function draw() {
    const grids = document.querySelectorAll('.grid-item');
    grids.forEach((grid) => {grid.addEventListener('mouseover', () => {
        grid.style.backgroundColor = 'black';
    });
    });
}

function deleteGrid() {
    const grids = document.querySelectorAll('.grid-item');
    grids.forEach((grid) => {grid.remove()});
}

function changeGridSize() {
    btns.forEach((btn) => {btn.addEventListener('click', () => {
        gridSize = parseInt(btn.id);
        deleteGrid();
        makeGrid(gridSize);
    });
    });
}

function eraseAll() {
    const grids = document.querySelectorAll('.grid-item');
    grids.forEach((grid => {grid.style.backgroundColor = 'pink'}));
}

start();