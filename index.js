const squares = document.querySelectorAll('.grid div')
const result = document.querySelector('#result')
const displayCurrentPlayer = document.querySelector('#current-player')
let currentPlayer = 1

console.log(squares)


squares.forEach((square, i) => {
    square.addEventListener('click', () => {
        alert('You clicked square ' + i)
    })
})