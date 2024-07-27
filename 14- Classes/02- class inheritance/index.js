class Person {
    constructor(name, age) {
        this.name = name;
        this.age = age;
    }
    greet() {
        console.log('Hello, my name is ' + this.name + ' and I am ' + this.age + ' years old.');
    }
}


// Task 3: Define a class Student that extends the Person class. Add a property studentld and a method to return the student ID. Create an instance of the Student class and log the student ID.

class Student extends Person {
    constructor(name, age, studentId) {
        super(name, age);
        this.studentId = studentId;
    }
    getStudentId() {
        return this.studentId;
    }
}

const firstStudent = new Student('Raman', 22, 1234);
console.log(firstStudent.getStudentId());
firstStudent.greet()


// Task 4: Override the greeting method in the Student class to include the student ID in the message. Log the overridden greeting message.

class StudentTwo extends Person {
    constructor(name, age, studentId) {
        super(name, age);
        this.studentId = studentId;
    }
    getStudentId() {
        return this.studentId;
    }

    greet() {
        console.log(`Hello, my name is ${this.name} and I am ${this.age} years old. My student ID is ${this.studentId}`);
    }
}

const secondStudent = new StudentTwo("loloo", 42, 14789)

secondStudent.greet();