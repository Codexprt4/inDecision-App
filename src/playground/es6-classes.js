class Person {
    constructor(name = "Anonymous", age = 0) {
        this.name = name;  
        this.age = age;
    }
    getGreeting() {
        return `Hi!! I am ${this.name}.`;
    }
    getDetails(){
        return  `${this.name} is ${this.age} year(s) old.`;
    }
}
class Student extends Person {
    constructor(name, age, major){
        super(name, age);
        this.major = major;
    }
    hasMajor(){
        return !!this.major;
    }
    getDetails(){
        let details = super.getDetails();

        if(this.hasMajor()){
            details += ` Their major is ${this.major}`;
        }
        return details;
    }
}

class Travel extends Person {
    constructor(name,age,homeLocation){
        super(name,age);
        this.homeLocation = homeLocation;
    }
    getGreeting(){
        let greets = super.getGreeting();

        if(this.homeLocation){
            greets += ` I am visiting from ${this.homeLocation}`;
        }
        return greets;
    }
}
const me = new Travel("Dipti");
console.log(me.getGreeting());

const we = new Travel("Priya Pariya" ,"24", "rajkot");
console.log(we.getGreeting());