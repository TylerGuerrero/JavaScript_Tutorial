"use strict"

const friends = ["micheal", "steven", "peter"]

const years = new Array(1991, 1984, 2008, 2020)

console.log(friends[0])
console.log(friends[1])

console.log(friends.length)
console.log(friends[friends.length - 1])

friends[2] = "Jay"
console.log(friends)
// friends = ["Brian", "Tyler"]

const firstName = "Jones"
const jones = [firstName, "Schmedtmann", 2037 - 1991, "teacher", friends]

// add to back of array
const len = jones.push("hi")
console.log(len, jones)

// add to front of array
jones.unshift("tyler")

// remove element from back of array
const popped = jones.pop()
console.log(popped, jones)

// remove elemnet from the front of the array
jones.shift()
console.log(jones)

// index at which elemnet is at
console.log(jones.indexOf("tyler"))
console.log(jones.includes("tyler"))

jones.push(23)
console.log(jones.includes(23))
