const slider = document.querySelector('.slider');
slider.value = 32;

// draw the grid
const grid = document.querySelector('.grid');
function drawCells(size) {
  for (let i = 0; i < size * size; i++) {
    const cell = document.createElement('div');
    cell.classList.add('grid-cell');
    cell.style.cssText = `width:${100/size}%; height:${100/size}%`;
    grid.appendChild(cell);
  }
  //console.log(`${size}x${size} cells drawn at ${100/size}% each`);
}
drawCells(slider.value);

// make cells active on hover
function makeCellsListen() {
  const gridCells = document.querySelectorAll('.grid-cell')
  gridCells.forEach((cell) => {
    //console.log('im listening!');
    cell.addEventListener('mouseover', () => {
      cell.classList.add('active');
    });
  });
  //console.log('cells listening');
}
makeCellsListen();

// reset button
const resetBtn = document.querySelector('.reset-btn');
resetBtn.addEventListener('click', resetCells);
function resetCells() {
  const gridCells = document.querySelectorAll('.grid-cell')
  gridCells.forEach((cell) => {
    cell.classList.remove('active');
  });
}

// read slider and change size
const sizeIndicator = document.querySelector('.size-indicator');
slider.addEventListener('input', (e) => {
  clearGrid();
  drawCells(e.target.value);
  sizeIndicator.textContent = slider.value + ' x ' + slider.value;
  //console.log(`slider changed to ${e.target.value}`);
});

// makeCellsListen called separately to improve performance
slider.addEventListener('mouseup', (e) => {
  makeCellsListen();
});

// helper function to clear grid for resizing
function clearGrid() {
  const gridCells = document.querySelectorAll('.grid-cell')
  gridCells.forEach((cell) => {
    //console.log('bye!');
    cell.remove();
  });
  //console.log('all cells removed');
}