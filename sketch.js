const btn = document.querySelector('button');
const container = document.getElementById('container');
const gridInput = document.getElementById('grid-size');

const drawBoard = () => {
    const gridSize = +gridInput.value;
    for (let i = 0; i < gridSize; i++) {
        const div = document.createElement('div');
        div.addEventListener('mouseover', ()=> {
            div.classList.add('hover');
        })
        div.addEventListener('click', ()=> {
            div.classList.add('click');
        })
        div.addEventListener('dblclick', ()=> {
            div.classList.remove('click', 'hover');
        })
        div.classList.add('cell');
        container.appendChild(div);
    };
    console.log(gridSize);
}

btn.addEventListener("click", drawBoard);