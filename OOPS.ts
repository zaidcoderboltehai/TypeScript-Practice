export {};  
// ===============================
// Abstract class - Person
// ===============================

// Abstract class ka matlab hota hai: ye class khud ka object nahi bana sakti,
// lekin isse inherited classes bana sakti hain
abstract class Person {
  // protected ka matlab: ye properties class aur subclass mein accessible hain
  protected name: string;
  protected age: number;

  constructor(name: string, age: number) {
    this.name = name;
    this.age = age;
  }

  // Abstract method: subclass isko override karke apni functionality dega
  abstract introduce(): void;
}


// ===============================
// Student class - Inheritance + Encapsulation + Polymorphism
// ===============================

// Student class Person se inherit karti hai (extends use karke)
class Student extends Person {
  // private ka matlab: ye property sirf is class ke andar accessible hai
  private grade: string;

  constructor(name: string, age: number, grade: string) {
    // super() se parent class ka constructor call hota hai
    super(name, age);
    this.grade = grade;
  }

  // introduce() method ko override kar rahe hain (Polymorphism)
  introduce(): void {
    console.log(`Hi, I am student ${this.name}, age ${this.age}, studying in grade ${this.grade}.`);
  }

  // Ye method encapsulated property (grade) ko safely access karne ke liye banaya gaya hai
  getGrade(): string {
    return this.grade;
  }
}


// ===============================
// Teacher class - Inheritance + Encapsulation + Polymorphism
// ===============================

// Teacher class bhi Person class se extend kar rahi hai
class Teacher extends Person {
  // private property sirf Teacher class ke andar hi accessible hai
  private subject: string;

  constructor(name: string, age: number, subject: string) {
    super(name, age); // Parent class constructor call
    this.subject = subject;
  }

  // introduce() method ko override kar rahe hain (Polymorphism)
  introduce(): void {
    console.log(`Hello, I am teacher ${this.name}, age ${this.age}, and I teach ${this.subject}.`);
  }
}


// ===============================
// Object Creation (Class & Object Concept)
// ===============================

// Student aur Teacher ke objects create kiye ja rahe hain
const student1 = new Student("Ayaan", 16, "10th");
const teacher1 = new Teacher("Mrs. Sharma", 35, "Mathematics");

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
