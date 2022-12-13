gridCells();

function gridCells () {
    const container = document.querySelector('.container');
    const gridStyles = `
        display: grid;
        grid-template-columns: repeat(16, 1fr);
        margin: 0;
        border: 0;`;
    container.style.cssText = gridStyles;
    
    for (i = 1; i <= 16 * 16; i++) {
        const cell = document.createElement('div');
        cell.className = 'grid-cell';
        cell.textContent = i;
        container.appendChild(cell);

    }
    container.addEventListener('mouseover', drawing);
}

function drawing() {
    console.log('it works');
}



