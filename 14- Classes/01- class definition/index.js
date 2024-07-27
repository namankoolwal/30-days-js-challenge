// Task 1: Define a class Person with properties name and age , and a method to return a greeting message. Create an instance of the class and log the greeting message.

class Person {
    constructor(name, age) {
        this.name = name;
        this.age = age;
    }
    greet() {
        console.log('Hello, my name is ' + this.name + ' and I am ' + this.age + ' years old.');
    }
}

const firstperson = new Person('Naman', 22)
firstperson.greet();

// Task 2: Add a method to the Person class that updates the age property and logs the updated age.

class Person2 {
    constructor(name, age) {
        this.name = name;
        this.age = age;
    }

    greet() {
        console.log(`Hii , i am ${this.name} and i am ${this.age} years old`);
    }

    updateAge(newage) {
        this.age = newage;
        console.log(`Age updated to ${this.age}`);
    }
}

const secondperson = new Person2('yaman', 32)
secondperson.greet();
secondperson.updateAge(23);
secondperson.greet();