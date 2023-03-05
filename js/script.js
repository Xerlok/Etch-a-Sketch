const container = document.querySelector('#grid-container');

function start(){
    makeGrid(32);
    draw();
}

function makeGrid(gridSize) {
    container.style.setProperty('--grid-rows', gridSize);
    container.style.setProperty('--grid-cols', gridSize);
    for (i = 0; i < (gridSize * gridSize); i++) {
    let cell = document.createElement("div");
    container.appendChild(cell).className = "grid-item";
  };
}

function draw() {
    const grids = document.querySelectorAll('.grid-item');
    grids.forEach((grid) => {grid.addEventListener('mouseover', () => {
        grid.style.backgroundColor = 'black';
    });
    });
}

start();