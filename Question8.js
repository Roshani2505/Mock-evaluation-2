let nums = [10, 3, 7, 20, 13, 2];
////Using map, create a new array of squares.
let squares=nums.map(x=> x*x);
console.log("Squares",squares);

/////Using filter, keep only prime numbers.
function isPrime(num){
    if(num<2)return false;
    for(let i=2;i<=Math.sqrt(num);i++){
        if(num%i===0)return false;
    }
    return true;
}

let primes=nums.filter(isPrime);
console.log("Primes",primes)

/////Using reduce, find the sum of all elements.
let sum= nums.reduce(acc,curr=> acc+curr,0);
console.log("sum",sum);

//////Using sort, arrange the elements in descending order.
let desc=[...nums].sort((a,b)=>b-a);
console.log("descending",desc);