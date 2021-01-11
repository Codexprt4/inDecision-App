var nameVar = 'Andrew';
var nameVar = 'Methew';
console.log("namevar", nameVar);


let nameLet = "Jen";
nameLet = "Ross";
console.log("nameLet", nameLet);

const nameConst = "Frank";
console.log("nameConst", nameConst);




//BLOCK scoping

// const fullName = "dipti Pariya";

// if(fullName){
//     var firstName = fullName.split(' ')[0];
//     console.log(firstName);
// }

// console.log(firstName);


//ARROW function
const getFirstName = (fullName) => fullName.split(' ')[0];

console.log(getFirstName("Dipit Pariya"));

const user = {
    name : "Dipti",
    cities : ['Rajkot', "Surat", "Baroda"],
    printPalcesList(){
       
        return this.cities.map((city) => this.name + " has lived in " + city);
       }
};
console.log(user.printPalcesList());

const multiplier = {
    numbers : ['1', '2','3'],
    multiplyBy : 9,
    multiply(){
        return this.numbers.map((multiWith) => multiWith * this.multiplyBy);
        
    }
    
}
console.log(multiplier.multiply());