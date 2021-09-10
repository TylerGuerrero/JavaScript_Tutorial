"use strict"

const age1 = calcAge1(4)

// function declaration

// can call before they are definded
// has access to this
// hoisted
function calcAge1(birthYear) {
    return 2037 - birthYear
}

// function expression

// can not call before funtion defined
// has access to this
// typically not hoisted but with var it is
const calcAge2 = function(birthYear) {
    return 2038 - birthYear
}

const age2 = calcAge2(2)

console.log(age1, age2)

// Arrow function

// can run them before declartion
// has access this parent scope
// typically not hoisted but with var it is
const calcAge3 = (birthYear) => 2037 - birthYear
const age3 = calcAge3(4)
console.log(age3)

const yearsUnitlRetirment = (birthYear, firstName) => {
    const age = 2037 - birthYear
    const retiremnt = 65 - age
    return `${firstName} retires in ${age}`
}

const retire = yearsUnitlRetirment(7777, "tyler")
console.log(retire)

