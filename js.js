let slider = document.getElementById('slider');
let line = document.getElementById('line');
let fill = document.getElementById('fill');
let shape = document.getElementById('shape');
let draged = false;
let x = 0;

function clickMove(e) {
    if (e.button === 0) {
        x = parseInt(e.clientX - line.getBoundingClientRect().left);
        if (x < 0) {
            x = 0
        } else if (x > line.offsetWidth) {
            x = line.offsetWidth;
        }
        fill.style.width = x + 'px';
        shape.style.left = x - parseInt(shape.offsetWidth / 2) + 'px';
    }
}

slider.addEventListener('click', (e) => {
    if (e.button === 0) {
        shape.classList.add('tra1');
        fill.classList.add('tra2');
        clickMove(e);
    }
})

shape.addEventListener('mousedown', (e) => {
    if (e.button === 0) {
        draged = true;
        clickMove(e);
    }
})

window.addEventListener('mousemove', (e) => {
    shape.classList.remove('tra1');
    fill.classList.remove('tra2');
    if (e.button === 0 && draged) {
        e.preventDefault();
        clickMove(e);
    }
})

window.addEventListener('mouseup', (e) => {
    if (e.button === 0 && draged) {
        draged = false;
    }
})

