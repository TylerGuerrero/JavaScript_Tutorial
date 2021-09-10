// type conversions
const inputYear = "1991"
console.log(Number(inputYear), inputYear)
console.log(Number(inputYear) + 10)

console.log(Number("Jones"))
console.log(typeof NaN)

console.log(String(23), 23)

// type coercion

// to string
console.log("I am " + 23 + " years old")

// to number
console.log("23" - "2" + " 2")
console.log("23" * "2")
console.log("23" / "2")

// type coercion
let n = "1" + 1
n = n - 1

// 10
console.log(n)