gridCells();

function gridCells () {
    const container = document.querySelector('.container');
    for (i = 0; i < 16; i++) {
        const cell = document.createElement('div');
        cell.className = 'grid-cell';
        container.appendChild(cell);

    }
}

