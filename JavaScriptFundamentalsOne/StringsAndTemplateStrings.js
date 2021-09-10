// Concatenate String
const firstName = "Tyler"
const birthYear = "1997"
const tyler = "Im " + firstName + " And i was born on the year " + birthYear;
console.log(tyler)

// Template String back ticks accepts dynmiac values
const tylerTemplate = `I am ${tyler}`
console.log(tylerTemplate)

// New line
console.log(`Just a regulaer string`)
console.log('String with \n\
            multiple \n\
            lines')
            
// best way is to do it with template strings
console.log(`String 
                with
                multiple
                lines`)