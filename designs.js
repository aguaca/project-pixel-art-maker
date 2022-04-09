// Select color input
// Select size input

// When size is submitted by the user, call makeGrid()
const form = document.getElementById('sizePicker');
function makeGrid(event) {
  event.preventDefault();
  const height = form.height.value;
  const width = form.width.value;

  const table = document.getElementById('pixelCanvas');
  while (table.firstChild) {
    table.removeChild(table.firstChild);
  }

  for (let h = 0; h < height; h += 1) {
    const tr = document.createElement('tr');
    for (let w = 0; w < width; w += 1) {
      const td = document.createElement('td');
      const assignColor = () => {
        const color = document.getElementById('colorPicker').value;
        td.style.backgroundColor = color;
      };
      td.addEventListener('click', assignColor);

      tr.appendChild(td);
    }
    table.appendChild(tr);
  }
}
form.addEventListener('submit', makeGrid);
