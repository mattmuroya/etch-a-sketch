// draw cells
const grid = document.querySelector('.grid');

for (let i = 0; i < 16 * 16; i++) {
  const cell = document.createElement('div');
  cell.classList.add('grid-cell');
  grid.appendChild(cell);
}

// make cells active on hover
const gridCells = document.querySelectorAll('.grid-cell')

gridCells.forEach((cell) => {
  cell.addEventListener('mouseover', () => {
    cell.classList.add('active');
  });
});

// reset button
const resetBtn = document.querySelector('.reset-btn');

resetBtn.addEventListener('click', resetCells);

function resetCells() {
gridCells.forEach((cell) => {
  cell.classList.remove('active');
});
}