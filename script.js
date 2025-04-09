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
    const squareFlexBasis = `${(100 / gridSize)}%`; 

    for (let i = 0; i < totalSquares; i++) {
        const square = document.createElement('div');
        square.classList.add('grid-square');
        square.style.width = `${squareWidth}px`;
        square.style.height = `${squareHeight}px`;
        square.style.flexBasis = squareFlexBasis; 
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

resizeBtn.addEventListener('click', () => {
    const newSizeStr = prompt("Enter the number of squares per side for the new grid (100 at max):");

    if (newSizeStr !== null) {
        const newSize = parseInt(newSizeStr);

        if (!isNaN(newSize) && newSize > 0 && newSize <= 100) {
            gridSize = newSize;
            totalSquares = gridSize * gridSize;
            createGrid();
            const squares = document.querySelectorAll('.grid-square');
            squares.forEach(square => {
                square.addEventListener('mouseover', () => {
                    square.style.backgroundColor = 'red';
                });
            });
        } else {
            alert("Invalid input. Please enter a number between 1 and 100.");
        }
    }
});