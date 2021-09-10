// Primitive (call stack) fixed memory 
// 1) Number
// 2) String
// 3) Boolean
// 4) BigInt
// 5) Null
// 6) Undefined
// 7) Symbols

// Access by value stores value from the call stack
let age = 30
let oldAge = age
age = 31

console.log(age, oldAge)

// +----+
// | 30 |
// +----|
//  age (Number)

// +----+
// | 30 | 
// +----|
// oldAge (Number)

// +----+
// | 31 |
// +----|
//  age

// Reference (heap) dynamic memory stores value from the  heap
// 1) Object literal
// 2) Array
// 3) Functions

// access by reference (changes memory permenantly)

const me = { 
    name: "Jones",
    age: 30
}

console.log(me)

const friend = me
friend.age = 27

console.log(friend, me)

//  0x98743
// +--------+
// | 0x7890 |     -> 0x7890 { name: "Jones", age: 30}
// +-------+|
// me (Object)

//  0x83740
// +--------+
// | 0x7890 |     -> 0x7890 { name: "Jones", age: 27}
// +-------+|
// friend (Object)

// Copying object
const jessica2 = {
    firstName: "Jessica",
    lastName: "Williams",
    age: 27,
    family: ["Alice", "Bob"]
}

// shallow copy (changes memory address but not for different levels): 
// will only deep copy the first level
// (other levels still the same memory address)
const jessciaCpy = Object.assign({}, jessica2)
jessciaCpy.lastName = "Davis"

// will update jessica2 because its only a shallow copy
jessciaCpy.family.push("Mary")
jessciaCpy.family.push("John")

console.log(jessciaCpy)
console.log(jessica2)

// Deep copy will clone all levels of the object