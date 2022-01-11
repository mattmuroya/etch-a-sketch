const slider = document.querySelector('.slider');
slider.value = 16;

// pick color
const colorPicker = document.querySelector('.color-picker');
colorPicker.value = '#444444'; // initialize defaul on reload

const colorPickerMask = document.querySelector('.color-picker-mask');
const colorIndicator = document.querySelector('.color-indicator');
colorPickerMask.style['background-color'] = colorPicker.value; // initialize
colorPicker.addEventListener('input', () => {
  colorIndicator.textContent = colorPicker
  colorPickerMask.style['background-color'] = colorPicker.value;
});

// draw the grid
const grid = document.querySelector('.grid');
function drawCells(size) {
  for (let i = 0; i < size * size; i++) {
    const cell = document.createElement('div');
    cell.classList.add('grid-cell');
    cell.style.cssText = `width:${100/size}%; height:${100/size}%`;
    cell.draggable = false;
    grid.appendChild(cell);
  }
  //console.log(`${size}x${size} cells drawn at ${100/size}% each`);
}
drawCells(slider.value);

// make cells active on hover
function makeCellsListen(color) {
  const gridCells = document.querySelectorAll('.grid-cell')
  gridCells.forEach((cell) => {
    //console.log('im listening!');
    cell.addEventListener('mouseover', (e) => {
      //cell.classList.add('active');
      //console.log(e.buttons);
      if (e.buttons === 1) {
        cell.style.cssText += `background-color: ${colorPicker.value}; border: none;`;
      }
    });
    cell.addEventListener('mousedown', () => {
      cell.style.cssText += `background-color: ${colorPicker.value}; border: none;`;
    })
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
    //cell.classList.remove('active');
    cell.style['background-color'] = null;
    cell.style['border'] = null;
  });
}

// read slider and change size
const sizeIndicator = document.querySelector('.size-indicator');
sizeIndicator.textContent = '16 x 16'; // initialize on first load
slider.addEventListener('input', () => {
  clearGrid();
  drawCells(slider.value);
  sizeIndicator.textContent = slider.value + ' x ' + slider.value;
  //console.log(`slider changed to ${e.target.value}`);
});

// makeCellsListen called separately to improve performance
slider.addEventListener('mouseup', () => {
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