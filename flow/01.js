// array specific loop...

// for of

const arr = [1, 2 , 3 , 4 , 5]

for (const iterator of arr) {
    // console.log(iterator);
}

const hello =  "edd1e is good at typing"

for( const g of hello){
    // console.log( ` ${g}`);
}


// for each loop

const coding = ["js" , "ruby", "java" , "python " , "C++"]

/*
written as 

array.forEach(fn () {

})


forEach(callbackfn: (value: string, index: number, array: string[]) => void, thisArg?: any): void

since the function inside the forEach is called 'callbackfn' , So it is not given any sort of name ...

*/
// coding.forEach( function (item) {
//     console.log(item);
// } )

// coding.forEach( (item2) => {
//     console.log(item2);
// })

// function printMe(item){
//     console.log(item)
// }

// coding.forEach(printMe)


coding.forEach( ( item,index,arr) => {
   if(index < 2){
    console.log(item , index ,arr);
   }
   else{
    console.log(item , index)
   }
})

const myCoding = [
    {
        porgLang:"java",
        file: "java"
    },
    {
        porgLang:"JavaScript",
        file: "js"
    },
    {
        porgLang:"Python",
        file: "py"
    },
    {
        porgLang:"C++",
        file: "cpp"
    }
]

// iteration on an array if objects

myCoding.forEach((item) => {

    console.log(item.file)

})

// for each doesn't return any value
