"use strict"

// Types of Scopes

// 1) Global Scope -- variable outside any function or blocks
// 2) functions scope --varibale inside functions
// 3) block scope -- variables inside blocks (if, loops etc)

// x scope has access to its parents scope variable not 
// children scope

function calcAge (birthYear) {
    const age = 2037 - birthYear
    console.log(firstName)

    function printAge() {
        const output = `You are ${age}, born in ${birthYear}`
        console.log(output)
    }

    if (birthYear >= 1981 && birthYear <= 1996) {
        var millenial = true
        const firstName = "Steven"
        const str = `Oh, and your a millenial, ${firstName}`
        console.log(str)
    
        function add(a, b) {
            return a + b
        }
    }

    
    console.log(millenial) // will print tru var is globally or func scoped
    printAge()

    return age
}

const firstName = "Jonas"
calcAge(1991)