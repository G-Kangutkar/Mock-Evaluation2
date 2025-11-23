
let nums = [10, 3, 7, 20, 13, 2];
const square = nums.map(i=>i*i)
console.log(square)
const prime = square.filter(i=>{
    let flag=0;
    for(j=0;j<i;j++){
        if(i%j == 0){
            flag++;
        }
    }
    if(flag==2){
        return i
    }
})
console.log(prime)

const sum = nums.reduce((acc,n)=>{
    acc=acc+n
    return acc
},0)
console.log(sum)

const desec = nums.sort((a,b)=>b-a)
console.log(desec)