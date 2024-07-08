// filter map and reduce in JS

const myNums = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]

const newNums = myNums.filter ( ( nums ) => {
    return  nums > 4
} )

// can also be written as 

const newNums2 = myNums.filter( (nums) => nums > 3 )


// yaha pe ye map function jo hai voh ek copy array mei values change karke deta hai and agr conditional statement use kiye toh boolean ans milega for the whole array 

const abe = myNums.map( (nums) => nums + 10)

//  we can actually chain these maps and filters on a variable like 'abe' and this will work flawlessly 

console.log(abe)

console.log(newNums) 
console.log(newNums2)