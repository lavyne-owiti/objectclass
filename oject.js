// # # Write a program to calculate purchases from a kiosk. For e.g. given the fruit name
// # 'orange' the program should fetch its price (30.00) and multiply with the quantity
// # requested (2) and return total cost in this printed format (2 Oranges for KES
// # 60.00).
// # calculateFruitCost(fruitName, quantity)
// # For example, calculateFruitCost('orange', 2) should return "2 Oranges for KES

// let friut ={
//     name:'orange',
//     price:200,
//     cost:function(quantity){
//       let total=this.price*quantity
//       return`${quantity} ${this.name} for KES ${total}`
//     }
//   }
//   console.log(friut.cost(4));

function calculateFruitCost(fruit, quantity){

fruitName={kiwi:120,orange:80,banana:100,grapes:90,apple:60}

for (let a=0;a<Object.keys(fruitName).length;a++){
  if(fruit===Object.keys(fruitName)[a]){
    console.log(`${quantity} ${fruit} for KES ${Object.values(fruitName)[a]*quantity}`);
  } 
  
}
}
calculateFruitCost("orange",5)

//     let result=Object.entries(fruitName).filter(function([key,value])
//     {
//       return `${quantity} for KES ${value*quantity}`
//     },Object.fromEntries);   
// }


// # Write a class KioskCalc that has the following fruitsPriceList object.
// # this.fruitsPriceList = { "orange": 30, "mango": 15, "avocado": 40 };
// # and takes two parameters (fruit, quantity) when initialized i.e.
// # var kioskCalc = new KioskCalc(“orange”, 2);
// # Thereafter, it allows one to calculate the total cost of the fruit by accessing the
// # getTotalCost( ) method.
// # kioskCalc.getTotalCost( ) // returns “2 orange for KES 60”

class KioskCalc{
  constructor(name,price){
    this.friutsPriceList={ 'orange':30,'mango':15,'avocado':40,};
    this.name=name
    this.price=price
  }

}
let kioskCalc= new KioskCalc('apple',50)
console.log(kioskCalc);
KioskCalc.prototype.getTotalCost=function(friut,quantity){
  return `${quantity} ${friut} for KES ${quantity*this.friutsPriceList[friut]}`
}
console.log(kioskCalc.getTotalCost("apple",4));



