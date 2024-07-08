// Singleton

// const tinderUser = new Object()
//  console.log(tinderUser)





// Object literals

mySym = Symbol("MySymbol")

const JsUser = { 
    name:"Eddie",
    "full name":"Akshay Sharma",
    [mySym]:"mykey",
    age: 20,
    city:"Jhansi",
    email:"edd1e@gmail.com",
    iLoggedIn: false
}


console.log(JsUser[mySym]);
console.log(JsUser["email"]);


JsUser.greeting = function(){
    console.log("Hello js learner")
}

JsUser.greetingTwo = function(){
    console.log(`Hello js learner ${ this.name }`)
}
/*
console.log(JsUser.greeting())
console.log(JsUser.greetingTwo())
console.log(JsUser.greeting)
*/

// undefined pata nahi kahan se aa raha 
// we'll learn baad mei  

const tinderUser = {}

tinderUser.id = "123_ABC"
tinderUser.name = "XYZ"
tinderUser.isLoggedIn = false
console.log(tinderUser)




const regularUser = {
    email : "someone@google.com",
    fullname : {
        firstName: "Akshay",
        lastName: "Sharma"
    }
}

console.log(regularUser)

const obj1 = {a:1 , b:2}
const obj2 = {c:3 , d:4}
const obj3 = {e:5 , f:6}

const obj4 = Object.assign(obj1,obj2,obj3)

console.log(obj4)


