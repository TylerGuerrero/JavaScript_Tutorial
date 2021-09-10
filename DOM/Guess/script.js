// DOM - DOCUMENT OBJECT MODEL

// Its it used to represent the html documnet

// Its creates a tree of parents and childen
// of html elements that you can access
"use strict"

// console.log(document.querySelector(".message").textContent)

// document.querySelector(".message").textContent = "Correct Number!"
// console.log(document.querySelector(".message"))

// document.querySelector(".number").textContent = 13 
// document.querySelector(".score").textContent = 20

// document.querySelector(".guess").value = 6;
// console.log(document.querySelector(".guess").value)

let secretNumber = Math.trunc(Math.random() * 20) + 1
let score = 20
let highScore = 0

const displayMessage = function (query, text) {
    document.querySelector(query).textContent = String(text)
}

document.querySelector(".check").addEventListener("click", function() {
    const guess = Number(document.querySelector(".guess").value)
    console.log(guess, typeof guess, secretNumber, typeof secretNumber)

    // no input
    if (!guess) {
        displayMessage(".message", "No Number")    

        // guess is correct
    } else if (guess === secretNumber) {
        displayMessage(".message", "Correct Number !")
        document.querySelector("body").style.backgroundColor = "green"
        document.querySelector(".number").style.width = "30rem"
        displayMessage(".number", guess)
        
         if (score > highScore) {
             highScore = score
             displayMessage(".highscore", highScore)
         }
        // guess is to high
    } else if (guess !== secretNumber) {
        if (score > 1) {
            displayMessage(".message", guess > secretNumber ? "High Too !" : "Too Low !")
            score--;
            document.querySelector(".score").textContent = String(score)
        } else {
            displayMessage(".message", "You Lost the Game ! Press Again")
            displayMessage(".score", 0)
        }
     } 
})

document.querySelector(".again").addEventListener("click", function() {
    secretNumber = Math.trunc(Math.random() * 20) + 1
    score = 20

    document.querySelector(".message").textContent = "Start Guessing"
    document.querySelector(".score").textContent = String(score)
    document.querySelector(".number").textContent = "?"
    document.querySelector(".guess").value = ""

    document.querySelector("body").style.backgroundColor = "#222"
    document.querySelector(".number").style.width = "15rem"
})