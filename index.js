const firstDice = document.querySelector('.dice-one')
const secondDice = document.querySelector('.dice-two')
const winner = document.querySelector('.heading')
const button = document.querySelector('.btn')
const startGame = document.querySelector('.start-game')


button.addEventListener('click', function(){
    const randomNumber1 = Math.floor(Math.random() * 6 + 1)
    // const randomDiceImage1 = 'images/' + 'dice' + randomNumber1 + '.png'
    // firstDice.setAttribute('src', randomDiceImage1)
    firstDice.src = `images/dice${randomNumber1}.png`

// Dice two
    const computer = Math.floor(Math.random() * 6 + 1)
    // const randomDiceImage2 = 'images/' + 'dice' + randomNumber2 + '.png'
    // secondDice.setAttribute('src', randomDiceImage2)
    secondDice.src = `images/dice${computer}.png`
    firstDice.classList.add('show-dice')
    secondDice.classList.add('show-dice')
    // CONDITIONS

    if(randomNumber1 > computer ){
        winner.textContent = 'player wins🎉🎈🥳'
        return 'player wins🎉🎈🥳'

    }else if (randomNumber1 == computer){
        winner.textContent = 'You have a draw📍'
        return 'You have a draw📍'
    }else{
        winner.textContent = 'You loose😪💔'
        return 'Computer wins🎉🎈🥳'
    }
})

startGame.addEventListener('click', function(){
    firstDice.classList.remove('show-dice')
    secondDice.classList.remove('show-dice')
    winner.textContent = 'Who won'
})