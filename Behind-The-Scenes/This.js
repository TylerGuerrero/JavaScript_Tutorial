"use strict"
// 1) this global scope is the window object
// 2) function declaration this is undefined by itself
// 2) function expression this is undefined by itself
// 3) arrow function,does not get its own this, 
    // this of its parent scope
// 4) methods (functions attached to object), 
//             this is the reference to the object

// 5) function inside a method is just a regular function
// can use arrow function cause of parent this

console.log(this)

function calcAgeDec (birthYear) {
    console.log(this) // undefined 
    console.log(2037 - birthYear)
}

calcAgeDec(4444)

const calcAgeExp = function (birthYear) {
    console.log(this) // undefined
    console.log(birthYear - 2037)
}

calcAgeExp(333)

const calcAgeArrow = (birthYear) => {
    console.log(2037 - birthYear)
    console.log(this)
}

calcAgeArrow(44444)

var firstName = "Tyler"

const jonas = {
    year: 1991,
    firstName: "Tyler",
    calcAge: function () {
        var firstName1 = "test"
        console.log(this)
        console.log(2037 - this.year)

        // normal function inside a method
        // solution 1
        const self = this
        function isMillenial() {
            console.log(this)
            console.log(self)
            console.log(self.year >= 1981 && self.year <= 1997)
        }

        const isMillenialArrow = () => {
            console.log(this)
            console.log(this)
            console.log(this.year >= 1981 && this.year <= 1997)            
        }
        isMillenial()
    },
    // this reference window object
    greet : () => console.log(`Hey ${this.firstName}`)
}

jonas.calcAge()
jonas.greet()

console.log(this)