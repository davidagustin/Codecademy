// The forecast today is measured in Kelvin
const kelvin = 270
// Kelvin to Celsius
let celsius = kelvin - 273
// Celsius to Fahrenheit
// Floor of decimal value Fahrenheit
let fahrenheit = Math.floor(celsius * (9/5) + 32)


console.log(`The temperature is ${fahrenheit} degrees Fahrenheit`)

let newton = Math.floor(celsius*(33/100))

console.log(`The temperature in Newton is ${newton}`)
