const arr = [1, 2, 3, 4,]

for (const a of arr) {
    console.log(a)
}

for (const item of arr.entries()) {
    console.log(item)
}

for (const [i, el] of menu.entries()) {
    console.log([i, el])
}

// ehncahed object 
// dynamic names now
const obj1 = {
    name: "tyler",
    age: 17,
    ["hello"]: {
        open: 12,
        close: 12
    }
}

// ES6 new short hand syntax
const obj2 = { 
                obj1, 
                order() {
                    console.log("This is still a function expression")
                }
            }

// optional chaining
const test1 = obj1?.age
const test2 = obj1?.notThere

console.log(test1, test2)

obj2?.order() ?? "Method does not exist"

const user = [{ name: "jones", email: "jones@gmail.com"}]
console.log(user[0]?.name ?? "User does not exist")