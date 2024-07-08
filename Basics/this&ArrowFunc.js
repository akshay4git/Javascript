// THIS KEYWORD AND ARROW FUCNTION

const user = {

    username: "akshay",
    price: 999,

    welcomeMessage: function(){
        console.log(`${this.username} , welcome to website`)
        console.log(this)
        /*
        as , 'this' refers to the current context of the scope so on logging that into the console we get the whole scope as an output .
        */
    }
}

// user.welcomeMessage()
// console.log('\n\n\n');
// user.username = "edd1e"
// user.welcomeMessage()

// console.log(this) // gives and empty object or scope ... 

// ARROW 
 function chai(){
    let username = " akshay"
    console.log(this.username)
 }

 chai()   
// 'function' is replaced by '=>'

 const chai2 = () => {
    let username = "hitesh sharma"
    console.log(this.username)
 }
 

 chai2()
 // dono ka same answer aa raha


 
 const chai3 = () => {
    let username = "hitesh sharma"
    console.log(this)
 }
 

 chai3()