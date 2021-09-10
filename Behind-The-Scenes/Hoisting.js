// Hoisting allows you to call functions before their
// defintions in the file

// before execution code is scanned for variables and for each 
// one a property is created for thme in the variable enviroment
// object 

// function declarations are hoisted, inital value is the function

// var variables are hoisted but inital value is undefined (bad)

// const, let not hoisted

// function expression and arrow function not hoisted but with var it is
"use strict"


console.log(me)
console.log(job)
console.log(year)

var me = "Jonas"
let job = "teacher"
const year = 1991

console.log(addDecl(1,2)) // returns 3
console.log(addExpr(3, 4)) // error
console.log(addArrow(3, 4)) // error

function addDecl() {
    return a + b;
}

const addExpr = function(a, b) {
    return a + b
}

const addArrow = (a, b) => a + b

// error: function will be undefined cause of var
console.log(addExprV(3, 4)) 

// error: function will be undefined cause of var
console.log(addArrowV(3, 4))

// sets var to undefined
var addExprV = function(a, b) {
    return a + b
}

var addArrowV = (a, b) => a + b

// funny example
console.log(undefined)

if (!numProducts) deleteShoppingCart()

var numProducts = 19

function deleteShoppingCart() {
    console.log("Deleted All Products")
}