// Select color input
// Select size input
// When size is submitted by the user, call makeGrid()

// table shift before color pick
const color = document.getElementById('colorPicker');
color.addEventListener('focusin', () => {
	color.style.marginBottom = '230px';
});
color.addEventListener('focusout', () => {
	color.style.marginBottom = '0px';
});

//getting form element
const form = document.getElementById('sizePicker');
function makeGrid(event) {
	event.preventDefault();
	//saving input to variables
	const height = form.height.value;
	const width = form.width.value;
	//getting table element
	const table = document.getElementById('pixelCanvas');
	//clear table everytime makeGrid gets call
	while (table.firstChild) {
		table.removeChild(table.firstChild);
	}
	//creating table based on width and heigth
	for (let h = 0; h < height; h += 1) {
		const tr = document.createElement('tr');
		for (let w = 0; w < width; w += 1) {
			const td = document.createElement('td');
			const assignColor = () => {
				td.style.backgroundColor = color.value;
			};
			//adding click event listener for every cell in table
			td.addEventListener('click', assignColor);

			tr.appendChild(td);
		}
		table.appendChild(tr);
	}
}
//crating an event listener for the form
form.addEventListener('submit', makeGrid);
