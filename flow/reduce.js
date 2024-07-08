const nums = [1, 2, 3]

const Total = nums.reduce( (acc , currval) => { 
    console.log(` acc : ${acc} and currval : ${currval}`)
    return acc + currval
}, 0)

const MyTotal = nums.reduce( ( acc , currval) => acc + currval )

console.log(Total)


let shoppingCart = [
 {
    item:"badminton shoes", 
    price: 3999
 },
 {
    item:"running shoes", 
    price: 2999
 },
 {
    item:"Colorblocked Sneakers By Puma", 
    price: 8999
 },
 {
    item:"NB 520 shoes", 
    price: 7999
 },
 {
    item:"Air Jordan 1 mids", 
    price: 15999
 },
 {
    item:"NB 575", 
    price: 9999
 },

]

// ab hume ye upar wali cart ka sum nikalna hai ,i.e total of the cart 

 const SubTotal = shoppingCart.reduce( (acc , ele) => acc + ele.price , 0)

 console.log(` The Amount Payable is Rs.${SubTotal} only/-`)