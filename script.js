const title = document.getElementById('title');
const increase = document.querySelector('.increase');
const decrease = document.querySelector('.decrease');
let textSize = 20;

const cardSection = document.querySelector('.card-grid');
const btnColor = document.getElementById('colorBtn');

increase.addEventListener('click', () => {
   textSize += 5;
   title.style.fontSize = textSize + 'px';
});
decrease.addEventListener('click', () => {
    textSize -= 5;
    title.style.fontSize = textSize + 'px';
});

btnColor.addEventListener('click', () => {
    // let backgroundColor = document.getElementById('colorInput').value;
    let backgroundColor = document.getElementById('inputColor').value;
    cardSection.style.backgroundColor = backgroundColor;
    document.getElementById('colorInput').value = backgroundColor;
});

let opacity = document.getElementById('opacity');

opacity.onchange = () => {
    cardSection.style.opacity = opacity.value;
}
