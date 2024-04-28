// const stu1 = {
//     name: "Tapas",
//     age: 19,
//     marks: 99.9,
//     getMarks: function () {
//         return this.marks;
//     },
// };

// const stu2 = {
//     name: "Jyoti",
//     age: 20,
//     marks: 95,
//     getMarks: function () {
//         return this.marks;
//     },
// };

// const stu3 = {
//     name: "Mohanta",
//     age: 21,
//     marks: 98,
//     getMarks: function () {
//         return this.marks;
//     }, 
// };

//-----------Prototype------------

// let arr1 = [1, 2, 3];
// let arr2 = [1, 2, 3];
// arr1.sayHello = () => {
//     console.log("hello, i am arr")
// }
// arr2.sayHello = () => {
//     console.log("hello, i am arr")
// }


//---------FactoryFunction--------

// function personMaker(name, age) {
//     const person = {
//         name: name, 
//         age: age,
//         talk() {
//             console.log(`Hi, my name is ${this.name}`);
//         },
//     };
//     return person;
// }


//Constructor-> doesn't return anything & start with with capital
// function Person(name, age) {
//     this.name = name;
//     this.age = age;
//     console.log(this);
// }

// Person.prototype.talk = function () {
//     console.log(`Hi, my name is ${this.name}`);
// };


//Classes in JS
// class Person {
//     constructor(name, age) {
//         this.name = name;
//         this.age = age;
//     }
//     talk() {
//         console.log(`Hi, my name is ${this.name}`);
//     }
// }

// let p1 = new Person("Tapas", 19);
// let p2 = new Person("Jyoti", 20);

// let p1 = personMaker("Tapas", 19);
// let p2 = personMaker("Jyoti", 20);



//---------Inheritance--------
class Person {
    constructor(name, age) {
        console.log("parent class constructor");
        this.name = name;
        this.age = age;
    }
    talk() {
        console.log(`Hi, I am ${this.name}`);
    }
}

class Student extends Person {
    constructor(name, age, marks) {
        console.log("student class constructor");
        super(name, age); //parent class constructor is being called
        this.marks = marks;
    }
    
}


class Teacher extends Person {
    constructor(name, age, subject) {
        super(name, age); //parent class constructor is being called
        this.subject = subject;
    }
    
}
