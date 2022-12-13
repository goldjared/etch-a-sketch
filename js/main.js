gridCells();

function gridCells () {
    const container = document.querySelector('.container');
    const gridStyles = `
        display: grid;
        grid-template-columns: repeat(16, 1fr);
        grid-template-rows: repeat(16, 1fr);
        margin: 0;
        border: 0;
        height: 400px;
        width: 400px;
        background-color: gray;`;
    container.style.cssText = gridStyles;
    
    for (i = 1; i <= 16 * 16; i++) {
        const cell = document.createElement('div');
        cell.className = 'cell';
        //cell.textContent = i;
        container.appendChild(cell);

    }
    
    //console.log(randomColor());
    container.addEventListener('mouseover', function(event){
        event.target.style.backgroundColor = randomHexColor();
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






