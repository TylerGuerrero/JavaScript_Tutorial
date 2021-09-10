"use strict"

// players
const player0El = document.querySelector(".player--0")
const player1El = document.querySelector(".player--1")

// scores
const score0El = document.querySelector("#score--0")
const score1El = document.getElementById("score--1")

// current
const current0El = document.getElementById("current--0")
const current1El = document.getElementById("current--1")

// img
const diceEl = document.querySelector(".dice")

// btns
const btnNew = document.querySelector(".btn--new")
const btnRoll = document.querySelector(".btn--roll")
const btnHold = document.querySelector(".btn--hold")

let currentScore, activePlayer, playing, scores

// switch player
function switchPlayer() {
    activePlayer = activePlayer === 0 ? 1 : 0
    currentScore = 0
    document.querySelector(`#current--${activePlayer}`).textContent = currentScore
    player0El.classList.toggle("player--active")
    player1El.classList.toggle("player--active")
}

const init = function () {
    // State variables
    scores = [0, 0]
    currentScore = 0
    activePlayer = 0
    playing = true

    // Starting conditions
    score0El.textContent = 0
    score1El.textContent = 0
    diceEl.classList.add("hidden")

    document.querySelector("#score--0").textContent = 0
    document.querySelector("#score--1").textContent = 0

    document.querySelector("#current--0").textContent = 0
    document.querySelector("#current--1").textContent = 0

    document.querySelector(".player--0").classList.remove("player--winner")
    document.querySelector(".player--1").classList.remove("player--winner")

    document.querySelector(".player--0").classList.add("player--active")
    document.querySelector(".player--1").classList.remove("player--active")
}

init()

btnRoll.addEventListener("click", function(event) {
    if (playing) {
        // generate a random dice roll
        const dice = Math.trunc(Math.random() * 6) + 1

        // display dice
        diceEl.classList.remove("hidden")
        diceEl.src = `dice-${dice}.png`

        // check for rolled 1
        if (dice !== 1) {
            // add dice to current score
            currentScore += dice
            document.querySelector(`#current--${activePlayer}`).textContent = currentScore
        } else {
            switchPlayer()
        }
    }
})

btnHold.addEventListener("click", function(event) {
    if (playing) {
        // 1) Add current score
        scores[activePlayer] += currentScore
        document.getElementById(`score--${activePlayer}`).textContent = scores[activePlayer]

        // 2) check if score is >= 100
        if (scores[activePlayer] >= 20) {
            diceEl.classList.remove("hidden")
            playing = false
            document.querySelector(`.player--${activePlayer}`).classList.add("player--winner")
            document.querySelector(`.player--${activePlayer}`).classList.remove("player--active")
        }

        // change active player
        switchPlayer()
    }
})

btnNew.addEventListener("click", init)
