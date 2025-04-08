const gridContainer = document.querySelector('.grid-container');
const gridSize = 16;
const totalSquares = gridSize * gridSize;

function createGrid() {
    for (let i = 0; i < totalSquares; i++) {
        const square = document.createElement('div');
        square.classList.add('grid-square');
        gridContainer.appendChild(square);
    }
}

createGrid();