// ===============================
// Abstract class - Person
// ===============================
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
// Abstract class ka matlab hota hai: ye class khud ka object nahi bana sakti,
// lekin isse inherited classes bana sakti hain
var Person = /** @class */ (function () {
    function Person(name, age) {
        this.name = name;
        this.age = age;
    }
    return Person;
}());
// ===============================
// Student class - Inheritance + Encapsulation + Polymorphism
// ===============================
// Student class Person se inherit karti hai (extends use karke)
var Student = /** @class */ (function (_super) {
    __extends(Student, _super);
    function Student(name, age, grade) {
        // super() se parent class ka constructor call hota hai
        var _this = _super.call(this, name, age) || this;
        _this.grade = grade;
        return _this;
    }
    // introduce() method ko override kar rahe hain (Polymorphism)
    Student.prototype.introduce = function () {
        console.log("Hi, I am student ".concat(this.name, ", age ").concat(this.age, ", studying in grade ").concat(this.grade, "."));
    };
    // Ye method encapsulated property (grade) ko safely access karne ke liye banaya gaya hai
    Student.prototype.getGrade = function () {
        return this.grade;
    };
    return Student;
}(Person));
// ===============================
// Teacher class - Inheritance + Encapsulation + Polymorphism
// ===============================
// Teacher class bhi Person class se extend kar rahi hai
var Teacher = /** @class */ (function (_super) {
    __extends(Teacher, _super);
    function Teacher(name, age, subject) {
        var _this = _super.call(this, name, age) || this; // Parent class constructor call
        _this.subject = subject;
        return _this;
    }
    // introduce() method ko override kar rahe hain (Polymorphism)
    Teacher.prototype.introduce = function () {
        console.log("Hello, I am teacher ".concat(this.name, ", age ").concat(this.age, ", and I teach ").concat(this.subject, "."));
    };
    return Teacher;
}(Person));
// ===============================
// Object Creation (Class & Object Concept)
// ===============================
// Student aur Teacher ke objects create kiye ja rahe hain
var student1 = new Student("Ayaan", 16, "10th");
var teacher1 = new Teacher("Mrs. Sharma", 35, "Mathematics");
// Dono objects ka introduce method call kar rahe hain (Polymorphism in action)
student1.introduce(); // Output: Hi, I am student Ayaan, age 16, studying in grade 10th.
teacher1.introduce(); // Output: Hello, I am teacher Mrs. Sharma, age 35, and I teach Mathematics.
// ===============================
// Encapsulation Example
// ===============================
// Direct access to private property will give error
// student1.grade = "12th"; // Error: Property 'grade' is private
// Lekin getGrade() method ke through access kar sakte ho
console.log(student1.getGrade()); // Output: 10th
