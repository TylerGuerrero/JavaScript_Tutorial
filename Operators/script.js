'use strict';

// Data needed for a later exercise
const flights =
  '_Delayed_Departure;fao93766109;txl2133758440;11:25+_Arrival;bru0943384722;fao93766109;11:45+_Delayed_Arrival;hel7439299980;fao93766109;12:05+_Departure;fao93766109;lis2323639855;12:30';

  // const openingHours = {
  //   thu: {
  //     open: 12,
  //     close: 22,
  //   },
  //   fri: {
  //     open: 11,
  //     close: 23,
  //   },
  //   sat: {
  //     open: 0, // Open 24 hours
  //     close: 24,
  //   }
  // }

const days = ["mon", "tue", "wed", "thu", "fri", "sat", "sun"]

// Data needed for first part of the section
const restaurant = {
  name: 'Classico Italiano',
  location: 'Via Angelo Tavanti 23, Firenze, Italy',
  categories: ['Italian', 'Pizzeria', 'Vegetarian', 'Organic'],
  starterMenu: ['Focaccia', 'Bruschetta', 'Garlic Bread', 'Caprese Salad'],
  mainMenu: ['Pizza', 'Pasta', 'Risotto'],
  order: function (startIndex, mainIndex) {
    return [this.starterMenu[startIndex], this.mainMenu[mainIndex]]
  },    
  openingHours: {
    thu: {
      open: 12,
      close: 22,
    },
    fri: {
      open: 11,
      close: 23,
    },
    sat: {
      open: 0, // Open 24 hours
      close: 24,
    },
  },
  orderPasta: function (ing1, ing2, ing3) {
    console.log(`Here is your delicious pasta with ${ing1}, ${ing2} and ${ing3}`)
  },
  orderPizza: function(mainIngredient, ...otherIngredients) {
    console.log(mainIngredient, otherIngredients)
  }
}

const arr = [1, 2, 3]
const [x, y, z] = arr

console.log(x, y, z)

const [main, , secondary] = restaurant.categories
console.log(main, secondary)

// const temp = main
// main = secondary
// secondary = temp

// neat swap
// [main, secondary] = [secondary, main]
// console.log(main, secondary)

// default values
const [start, m = 1] = restaurant.order(2, 0)

// nested destructuring
const nested = [2, 4, [5, 5]]
const [i, , [j, k]] = nested

const { name, openingHours, categories } = restaurant
const { name: resteraurantName, openingHours: hours, categories: tags } = restaurant
console.log(resteraurantName, hours, tags)

// default values
const { menu = [], starterMenu: starters = [], } = restaurant
console.log(menu, starters)

// Mutating variables
let a = 111
let b = 999

const obj = { a: 23, b: 7, c: 14 }
// ({ a, b } = obj)

// nested objects
const { openingHours: { sat: { o, c } }, openingHours: { fri: { open, close  } } } = restaurant

// Spreading on right hand side
// spreads all elements
const arr1 = [7, 8, 9]
const newArr = [1, 2, ...arr]
console.log(...newArr)

const newMenu = [...restaurant.mainMenu, "Gnocci"]
console.log(newMenu)

// copy array
const mainArray = [...restaurant.mainMenu]

// join two array
const join2arrays = [...restaurant.starterMenu, 
                    ...restaurant.mainMenu]

// Iterables strings, arrays, map, sets

const ingredients = [prompt('Let\'s make pasta ! Ingredient 1?'), prompt("Ingredient 2"), prompt("Ingredient 3")]

console.log(ingredients)

restaurant.orderPasta(...ingredients)

// Object spreading
const newRestaurant = { foundedIn: "2000", ...restaurant, founder: "Tyler" }

// The spread operator makes deep copies of data if the data is not nested.
// When you have nested data in an array or object the 
// spread operator will create a deep copy of the 
// top most data and a shallow copy of the nested data
const resterauntCpy = { ...restaurant }
resterauntCpy.name = "Ristorante Roma"
console.log(resterauntCpy.name)
console.log(restaurant.name) 

// Rest pattern, on left hand side
const [a1, b1, ...others] = [1, 2, 3, 4, 5]
console.log(a, b, others)

const [pizza, , risotto, ...otherFood] = [...restaurant.mainMenu, ...restaurant.starterMenu]
console.log(pizza, risotto, otherFood)

const { openingHours: { sat, ...weekDays }} = restaurant
console.log(openingHours, sat, weekDays)

// Functions spread and rest

// spread 
console.log({ ...restaurant })

// rest (compression)
function add (...number) {
  let sum = 0

  for (let i = 0; i < number.length; i++) {
    sum += number[i]
  }

  console.log(sum)
} 

add(2, 3)
add(2, 3, 4, 5)
add(2, 3, 4, 5, 6)

const p = [23, 5, 7]
add(...p)


restaurant.orderPizza("Pizza", "Hello", "Hi", "ok boomer")

// nullish coalse
const guestCorrect = restaurant.numGuest ?? 10
console.log(guestCorrect)


for (const day of days) {
  const open = restaurant.openingHours[day]?.open ?? "Closed"
  console.log(open)
}