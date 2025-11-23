
let arr1 = [10, 20, 30];
let arr2 = [40, 50];
const combined = [...arr1,...arr2]
console.log(combined);

let person = { name: "Venu", age: 25 };
let extra = { city: "Bengaluru" };
const profile = {...person,...extra}
console.log(profile)

 // should return 10
// const sumAll=(...num)=>({
//     let total:0,
//     return total: +=num
// },0)
// console.log(sumAll(1, 2, 3, 4))

let numbers = [10, 20, 30, 40, 50];
const [a,,,,]=numbers
console.log(a)

const remaining = (...num)=>{return num}
console.log(remaining(numbers))

let user = {
  name: "Alice",
  address: {
    city: "Bengaluru",
    pin: 560001,
    geo: { lat: 11.22, lng: 77.33 }
  }
};
const {
    name,
    address:{city,pin,
        geo:{lat,lng}
    }
}=user
console.log(city,lat,lng)

const multiply = (a,b)=> a*b;
console.log(multiply(3,4))

let emp = {
  name: "Prakash",
  details: {
    department: "IT",
    profile: { role: "Developer" }
  }
};
console.log(emp?.details?.profile?.role)