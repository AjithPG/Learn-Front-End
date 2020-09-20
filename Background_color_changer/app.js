//array of colors
const color = ["red", "#f15025", "rgba(133,122,200)"];

const btn = document.getElementById('click-me');
const colorValue = document.querySelector('.color');

btn.addEventListener('click', function() {

    const randomNumber = getRandomNumber();
    document.body.style.backgroundColor = color[randomNumber];
    colorValue.textContent = color[randomNumber];

});

//Random Generator Function
function getRandomNumber() {

    return Math.floor(Math.random() * color.length);
}