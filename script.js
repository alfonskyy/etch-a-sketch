const gridContainer = document.querySelector('.grid-container');
let gridSize = 16;
let totalSquares = gridSize * gridSize;
const gridBorderThickness = 3; 

function createGrid() {
    gridContainer.innerHTML = '';

    
    const availableWidth = gridContainer.offsetWidth - (gridBorderThickness * 2);
    const availableHeight = gridContainer.offsetHeight - (gridBorderThickness * 2);

    
    const squareWidth = (availableWidth / gridSize);
    const squareHeight = (availableHeight / gridSize);

    for (let i = 0; i < totalSquares; i++) {
        const square = document.createElement('div');
        square.classList.add('grid-square');
        square.style.width = `${squareWidth}px`;
        square.style.height = `${squareHeight}px`;
        gridContainer.appendChild(square);
    }
    
}

createGrid();
const squares = document.querySelectorAll('.grid-square');
squares.forEach(square => {
    square.addEventListener('mouseover', () => {
        square.style.backgroundColor = 'red'; 
    });
});