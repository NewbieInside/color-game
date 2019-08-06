let numSquares = 6;
let colors = generateRandomColors(numSquares);
let h1 = document.querySelector('h1');
let squares = document.querySelectorAll('.square');
let pickedColor = pickColor();
let colorDisplay = document.getElementById('colorDisplay');
let messageDisplay = document.querySelector('#message');
let resetButton = document.querySelector('#reset');
let modeButtons = document.querySelectorAll('.mode');


init();

function init() {
    // Mode Buttons eventlisteners
    for (let i = 0; i < modeButtons.length; i++) {
        modeButtons[i].addEventListener('click', function() {
        modeButtons[0].classList.remove('selected');
        modeButtons[1].classList.remove('selected');
        this.classList.add('selected');
        this.textContent === 'Easy' ? numSquares = 3 : numSquares = 6;
        reset();
        });
    }
}



function reset() {
    //generate all new colors
    colors = generateRandomColors(numSquares);
    //pick a new random color from an array
    pickedColor = pickColor();
    //change color display to match picked color
    colorDisplay.textContent = pickedColor;
    resetButton.textContent = 'New Colors';
    messageDisplay.textContent = '';
    //change colors of squares
    for (let i = 0; i < squares.length; i++) {
        if(colors[i]) {
            squares[i].style.display = 'block';
            squares[i].style.backgroundColor = colors[i];
        } else {
            squares[i].style.display = 'none';
        }
        squares[i].style.background = colors[i];
    }
    h1.style.backgroundColor  = 'steelblue';
}




resetButton.addEventListener('click', function() {
    reset();
})

colorDisplay.textContent = pickedColor;



for (let i = 0; i < colors.length; i++) {
    // add click listeners to squares
    squares[i].addEventListener('click', function() {
        // grab color of clicked square
        let clickedColor = this.style.backgroundColor;
        // compare color to picked color
        if (clickedColor === pickedColor) {
            messageDisplay.textContent = 'Correct!';
            resetButton.textContent = 'Play again?';
            changeColors(clickedColor);
            h1.style.backgroundColor = clickedColor;
        } else {
            this.style.backgroundColor = '#232323';
            messageDisplay.textContent = 'Try Again';
        }
    })
}


function changeColors (color) {
    //loop through all squares 
    for (let i = 0; i < squares.length; i++){
        //change each color to match given color
        squares[i].style.background = color;
    }
}

function pickColor() {
    let random = Math.floor(Math.random() * colors.length);
    return colors[random];
}

function generateRandomColors(num) {
    // make an array 
    let arr = [];
    // repeat num times
    for (let i = 0; i < num; i++) {
        // get random color and push into array
        arr.push(randomColor());
    }
    //return an array
    return arr;
}

function randomColor() {
    // pick red from 0 to 255
    let red = Math.floor(Math.random() * 256);
    // pick green from 0 to 255
    let green = Math.floor(Math.random() * 256);
    // pick blue from 0 to 255
    let blue = Math.floor(Math.random() * 256);
    return 'rgb(' + red + ', ' + green + ', ' + blue +  ')';
}