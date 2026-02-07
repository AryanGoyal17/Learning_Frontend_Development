const PI = 3.14159

// PI = 1 (This line gives an error in console since PI is a constant)

let radius;
let Circumference;

radius = window.prompt(`Enter the radius of the circle: `)
Circumference = 2 * PI * radius

console.log(`The Circumference of the Circle is ${Circumference}`)