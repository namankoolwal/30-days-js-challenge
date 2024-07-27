// Task 5: Add a static method to the Person class that returns a generic greeting message. Call this static method without creating an instance of the class and log the message.

class Person {
    constructor(name, age) {
        this.name = name;
        this.age = age;
    }
    greet() {
        console.log('Hello, my name is ' + this.name + ' and I am ' + this.age + ' years old.');
    }

    static genericMsg(){
        console.log("Hello, I am a person");
    }
}

Person.genericMsg();


// Task 6: Add a static property to the Student class to keep track of the of students created. Increment this property in the constructor and log the total number of students.

class Student extends Person {
    static totalStudents = 0;
    constructor (name, age, studentId){
        super(name, age);
        this.studentId = studentId;
        Student.totalStudents++;
    }

    getStudentId(){
        console.log(this.studentId)
    }
}

console.log(Student.totalStudents);

const firstStudent = new Student('Raman', 22, 1234);
const secondStudent = new Student('Raman', 22, 1234);
console.log(Student.totalStudents);