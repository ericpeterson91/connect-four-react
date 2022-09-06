const squares = document.querySelectorAll('.grid div')
const result = document.querySelector('#result')
const displayCurrentPlayer = document.querySelector('#current-player')
let currentPlayer = 1

console.log(squares)


squares.forEach((square, i) => {
    square.addEventListener('click', () => {
        if (squares[i + 7].classList.contains('taken')) {
            if (currentPlayer == 1) {
                squares[i].classList.add('taken')
                squares[i].classList.add('player-one')
                currentPlayer = 2
                displayCurrentPlayer.innerText = currentPlayer
            } else if (currentPlayer == 2) {
                squares[i].classList.add('taken')
                squares[i].classList.add('player-two')
                currentPlayer = 1
                displayCurrentPlayer.innerText = currentPlayer
            }
        }  

    })
        
    })
