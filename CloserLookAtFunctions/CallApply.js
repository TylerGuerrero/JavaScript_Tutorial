"use strict"

const lufthanda = {
    airline: "Lufthansa",
    iataCode: "LM",
    bookings: [],
    book(flightNum, name) {
        console.log(`${name} booked a seat on ${this.airline} flight ${this.iataCode}${flightNum}`)
        this.bookings.push({ flight: `${this.iataCode}${flightNum}`, name })
    }
}

lufthanda.book(239, "Jonas Schmedtmann")
lufthanda.book(635, "John Smith")

const eurowings = {
    ailrine: "Eurowings",
    iataCode: "EW",
    bookings: []
}

// this is no longer apart of object but now
// will point to undefined cause its a regular funciton now
const book = lufthanda.book
// book(23, "Sarah Williams")

// this now points to eurowings
book.call(eurowings, 23, "Sarah Williams")

book.call(lufthanda, 239, "Tyler G")

const swiss = {
    airline: "Swiss Air Line",
    iataCode: "LX",
    bookings: []
}

book.call(swiss, 583, "Mary Cooper")
console.log(swiss)

// Apply Method same except takes array as argumnets
const flightData = [582, "George Cooper"]
book.apply(swiss, flightData)
console.log(swiss)

book.call(swiss, ...flightData)

// Bind Method, does not immediatley run function
// returns a function where this is bounded to the value we pass in
const bookEw = book.bind(eurowings)
const boolLw = book.bind(lufthanda)
const bookLX = book.bind(swiss)

boolLw(23,"Tyler")
bookEw(33, "Steven Williams")

const bookEw23 = book.bind(eurowings, 23)
bookEw23("Jonases Schmedtmann")
bookEw23("Martha Cooper")

// Object with event listeners
lufthanda.planes = 300
lufthanda.buyPlane = function () {
    this.plane++
    console.log(this.plane)
    console.log(this)
}

document.querySelector(".buy").addEventListener("click", lufthanda.buyPlane.bind(lufthanda))

const addTax = (rate, value) => value + value * rate
console.log(addTax(0.10, 200))

const addVAT = addTax.bind(null, 0.23)
console.log(addVat(23))