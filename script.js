let squares = document.querySelectorAll('.square');
let randomSquare;
let currentTime;
let result;
let hitSquare;
let counterID, timerID;
let btn = document.getElementById('btnStart');

//Random vi tri
function randomPosition() {
    //Reset
    squares.forEach(function(square) {
        square.classList.remove('mole');
    });

    randomSquare = squares[Math.floor(Math.random() * squares.length)];
    randomSquare.classList.add('mole');
    hitSquare = randomSquare.id;
}

//Cong diem
squares.forEach(function(square) {
    square.addEventListener('mousedown', function() {
        if(square.id == hitSquare) {
            result++;
            document.getElementById('score').innerText = result;
            hitSquare = null;
        }
    })
})


// Dem thoi gian
function countDown() {
    currentTime--
    document.getElementById('timeLeft').textContent = currentTime;
    if(currentTime == 0) {
        clearInterval(counterID);
        clearInterval(timerID);
        hitSquare = null;
        alert('Hết giờ');
    }
}

btn.addEventListener('click', () => {
    currentTime = 10;
    result = 0;
    document.getElementById('timeLeft').innerText = currentTime;
    document.getElementById('score').innerText = 0
    timerID = setInterval(randomPosition, 400);
    counterID = setInterval(countDown, 1000);
});





