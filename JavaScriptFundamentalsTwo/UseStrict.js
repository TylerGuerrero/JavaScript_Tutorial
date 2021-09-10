"use strict";

// forbids certain things
// 1) forbids undeclared var names
// 2) cant use reserved words as var names
// 3) enforces scoping
// 4) this key word for function by itself is undefined

// will show visible errors

let hasDriversLicense = false;
const passTest = true;

if (passTest) {
    // error here
    hasDriverLicense = true;
}

// reserved word erros
// const interface = "audio"
// const private = 3;
// const new = 5;