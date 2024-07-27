// Task 7: Add a getter method to the Person class to return the full name (assume a firstName and lastName property). Create an instance and log the full name using the getter.

class Person {
    constructor(firstName, LastName){
        this.firstName = firstName;
        this.lastName = LastName;
    }
    get fullName(){
        return `Myself ${this.firstName} ${this.lastName}`;
    }
}

const firstPerson = new Person('Naman', 'Khandelwal');
console.log(firstPerson.fullName);



// Task 8: Add a setter method to the Person class to update the name properties ( firstName and lastName ). Update the name using the setter and log the updated full name.

class Person2 {
    constructor(firstName, LastName){
        this.firstName = firstName;
        this.lastName = LastName;
    }
    get fullName(){
        return `Myself ${this.firstName} ${this.lastName}`;
    }

    set fullName(newName){
        const [newfirstName, newlastName] = newName.split(' ');
        this.firstName = newfirstName;
        this.lastName = newlastName;
    }
}

const secondPerson = new Person2('Naman', 'Khandelwal');
console.log(secondPerson.fullName);
secondPerson.fullName = 'Raman Sharma';
console.log(secondPerson.fullName);
