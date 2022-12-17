gridCells();

function gridCells () {
    const container = document.querySelector('.container'); 
    const gridStyles = `
        display: grid;
        grid-template-columns: repeat(16, 1fr);
        grid-template-rows: repeat(16, 1fr);
        margin: 0;
        border: 0;
        background-color: #ada6a6;
        height: 600px;
        width: 600px;`;
    container.style.cssText = gridStyles;
    
    for (i = 1; i <= 16 * 16; i++) { 
        const cell = document.createElement('div');
        cell.className = 'cell';
        //cell.textContent = i;
        container.appendChild(cell);

    }
    const gridSizeText = document.querySelector('.grid-size-text');
    gridSizeText.classList.add = ('gridSizeText');
    gridSizeText.textContent = `Drawing space: 16 x 16`;
    container.addEventListener('mouseover', function(event){
        event.target.style.backgroundColor = randomHexColor();
        //event.target.style.filter = 'brightness(110%)';
        let currentFilter = event.target.style.filter;
        let filterNum = currentFilter.replace(/\D/g, "");
        let newFilterNum = filterNum - 10;
        console.log('currentFilter is ', currentFilter);
        console.log('filterNum is ', filterNum);
        console.log('newFilterNum is ', newFilterNum);
        event.target.style.filter = `brightness(${newFilterNum})`;
        //event.target.style.filter = 'brightness(90%)';
      });
}

function randomHexColor() {
    let [r,g,b] = randomRgbColor();
    let hr = r.toString(16).padStart(2, '0');
    let hg = g.toString(16).padStart(2, '0');
    let hb = b.toString(16).padStart(2, '0');

    return "#" + hr + hg + hb;
}

function randomRgbColor() {
    let r = randomInteger(255);
    let g = randomInteger(255);
    let b = randomInteger(255);
    return [r,g,b];
    }

function randomInteger(max) {
    return Math.floor(Math.random()*(max + 1));
}

function adjustGrid() {
    const container = document.querySelector('.container');
    const adjustNumber = prompt('Enter number to adjust grid size. (Max value 100)', '');
    if (adjustNumber === '' || adjustNumber < 1 || isNaN(adjustNumber)) {
        return alert('Cancelled.');
    } else if (adjustNumber > 100) {
        return alert('Cancelled. Number too large.');
    }/* else if (isNaN(adjustNumber)) {
        return alert('Cancelled. Not a number.');
    }*/

    while (container.hasChildNodes()) {
        container.removeChild(container.firstChild);
    }

    const gridStyles = `
        display: grid;
        grid-template-columns: repeat(${adjustNumber}, 1fr);
        grid-template-rows: repeat(${adjustNumber}, 1fr);
        margin: 0;
        border: 0;
        background-color: gray;
        height: 600px;
        width: 600px;`;
    container.style.cssText = gridStyles;
    
    for (i = 1; i <= adjustNumber * adjustNumber; i++) {
        const cell = document.createElement('div');
        cell.className = 'cell';
        container.appendChild(cell);
    }
    const gridSizeText = document.querySelector('.grid-size-text');
    gridSizeText.classList.add = ('gridSizeText');
    gridSizeText.textContent = `Drawing space: ${adjustNumber} x ${adjustNumber}`;
    
}
