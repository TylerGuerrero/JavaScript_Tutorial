"use strict"

const bookings = []

const createBooking = function (flightNum, numPassengers = 1, price = 199 * numPassengers) {
    // numPassengers = numPassengers || 1
    // price = price || 199

    const booking = { 
        flightNum,
        numPassengers,
        price
    }

    console.log(booking)
    bookings.push(booking)
}

// createBooking("LH123")
// createBooking("LH123", 2, 800)
// createBooking("LH123", 2)
// createBooking("LH123", 3)
// createBooking("LH123", undefined, 1000)

const flight = "LM234"
const jonas = {
    name: "Jonas Schmedtmann",
    passport: 2473979284
}

// Pass by value vs pass by reference
const checkIn = function (flightNum, passenger) {
    flightNum = "LM999"
    passenger.name = "Mr. " + passenger.name

    if (passenger.passport === 24739479284) {
        alert("Check in")
    } else {
        alert("Wrong Passport")
    }
}

checkIn(flight, jonas)

const flightNum = flight
const passenger = jonas


const newPassport = function (person) {
    person.passport = Math.trunc(Math.random() * 100000000000)
}

newPassport(jonas)
checkIn(flight, jonas)
console.log(flight, jonas)

// first class functions (functions as values)
// store function in variables
// pass function as argumnet to other function
// return function from function
// call methods on functions

// higher order function
// a function that recieves another function as an argumnet
// and returns a new function or both

const oneWord = function (str) {
    return str.replace(/ /g, '').toLowerCase()
}

const upperFirstWord = function(str) {
    const [first, ...others] = str.split(" ")
    return [first.toUpperCase(), ...others].join(" ")
}

// Higher-order function
const transformer = function (str, fn) {
    console.log(`Original string: ${str}`)
    console.log(`Transformed string: ${fn(str)}`)
}

// callback function
transformer("Javascript", upperFirstWord)
transformer("Javascript test", oneWord)

const high5 = function () {
    console.log("Hi")
}

document.body.addEventListener("click", high5)

["Jonas", "Martha", "Adam"].forEach(high5)

// returning function
const greet = function(greeting) {
    return function (name) {
        console.log(`${greeting} ${name}`)
    }
}

const fn = greet("Hey")
fn("Tyler")

greet("Hello")("Jones")

// arrow function returing arrow function
const greetArr = greeting => name => {
    console.log(`${greeting} ${name}`)
}