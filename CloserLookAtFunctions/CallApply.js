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