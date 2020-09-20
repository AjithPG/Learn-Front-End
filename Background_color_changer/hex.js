//array of colors
const hexColor = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 'A', 'B', 'C', 'D', 'E', 'F'];

const btn = document.getElementById('click-me');
const colorValue = document.querySelector('.color');

btn.addEventListener('click', function() {

    let hexValue = '#';

    for (let i = 0; i < 6; i++) {

        hexValue += hexColor[getRandomNumber()];
    }

    document.body.style.backgroundColor = hexValue;
    colorValue.textContent = hexValue;

});

// random number generator
function getRandomNumber() {

    return Math.floor(Math.random() * hexColor.length);
}