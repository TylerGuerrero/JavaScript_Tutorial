const jonas = {
    firstName: "Jonas",
    lastName: "Schmedtman",
    age: 2037 - 1991,
    friends: ["micheal", "Peter", "Steven"]
}

console.log(jonas)

// dot notation, bracket notation
console.log(jonas.lastName)
console.log(jonas['lastName'])

// bracket notation is good for computed results when you
// want to search for a key in the  objetct

// the dot notation here will look up res
// the bracket notation will use res computde value to
// look it up

const res = prompt("Key for the object test")
console.log(jonas.res)
console.log(jonas[res])

// Add properties
jonas.location = "Protgual"
jonas["twitter"] = "@jonastwitter.com"


// object funtions
const jonasObj = {
    firstName: "Jonas",
    lastName: "Schmedtmann",
    birthYear: 1991,
    job: "teacher",
    friends: ["Micheal", "Peter", "Steven"],
    hasDriverLicense: true,
    calcAge: function() {
        console.log(this)
        this.age = 2037 - this.birthYear 
        return this.age
    }
}

console.log(jonasObj.calcAge(19))
console.log(jonasObj["calcAge"](19))