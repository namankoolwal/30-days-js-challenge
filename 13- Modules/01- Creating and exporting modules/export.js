// Task 1: Create a module that exports a function to add two numbers. Import and use this module in another script.

    const addFunction = (a,b)=>{
        return a+b;
    
    }

    
    
    
    // Task 2: Create a module that exports an object representing a person with properties and methods. and use this module in another script.


    const person = {
        name: "Naman",
        age: 22,
        greet: function(){
            return(`Hello, my name is ${this.name} and I am ${this.age} years old.`);
        }
    }
    
    
    export {addFunction , person};