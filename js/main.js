gridCells();

function gridCells () {
    const container = document.querySelector('.container');
    container.style.display = 'grid';
    for (i = 0; i < 16; i++) {
        const cell = document.createElement('div');
        cell.className = 'grid-cell';
        cell.textContent = i;
        container.appendChild(cell);

    }
}

