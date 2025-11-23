
let arr1 = [10, 20, 30];
let arr2 = [40, 50];
const combined = [...arr1,...arr2]
console.log(combined);

let person = { name: "Venu", age: 25 };
let extra = { city: "Bengaluru" };
const profile = {...person,...extra}
console.log(profile)