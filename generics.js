"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
// 1.Generic Function: identity  
// Ye function kisi bhi type ka value leta hai aur wahi type wapas deta hai.  
// <T> ek generic placeholder hai jo call ke waqt decide hota hai.
function identity(value) {
    // "value" ko exactly usi type ke saath return kar raha hai jo pass hua tha
    return value;
}
// identity<number>(123): yahan T = number, to function number return karega
var numValue = identity(123); // numValue ka type: number
// identity<string>("TypeScript"): yahan T = string, to function string return karega
var strValue = identity("TypeScript"); // strValue ka type: string
console.log("identity<number>:", numValue); // Output: identity<number>: 123
console.log("identity<string>:", strValue); // Output: identity<string>: TypeScript
// 2.Generic Function: getFirstElement  
// Ye function kisi bhi type ki array leta hai (arr: T[]) aur uska pehla element return karta hai.
function getFirstElement(arr) {
    // arr[0] se array ka first element milta hai aur wahi type return hota hai
    return arr[0];
}
// getFirstElement<number>([10, 20, 30]): pehla number return karega
var firstNum = getFirstElement([10, 20, 30]);
// getFirstElement<string>(["a", "b", "c"]): pehla string return karega
var firstStr = getFirstElement(["a", "b", "c"]);
console.log("First number:", firstNum); // Output: First number: 10
console.log("First string:", firstStr); // Output: First string: a
// 3.Generic Class: Box  
// Ye ek container class hai jo kisi bhi type ka "content" store kar sakti hai.
var Box = /** @class */ (function () {
    function Box(value) {
        // Constructor receives value of type T and assigns to content
        this.content = value;
    }
    Box.prototype.show = function () {
        // show() method content ko console pe print karta hai
        console.log("Box contains:", this.content);
    };
    return Box;
}());
// Box<string>("Notebook"): yahan T = string, to content string type hoga
var stringBox = new Box("Notebook");
stringBox.show(); // Output: Box contains: Notebook
// Box<number>(2025): yahan T = number, to content number type hoga
var numberBox = new Box(2025);
numberBox.show(); // Output: Box contains: 2025
