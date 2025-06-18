export {};  // Is file ko module banaya, taaki global variables se conflict na ho

// 1. Number → Sirf numeric values rakhte hain (integer ya decimal)
let age: number = 25;           // age me humne 25 assign kiya, ek number type
let price: number = 499.99;     // price me decimal value store ki
let quantity: number = 5;       // quantity me integer value

console.log("Number examples:", age, price, quantity);
// → Yeh console.log teen number values ko ek saath print karega

// 2. String → Text values store karne ke liye
let userName: string = "Zaid";               
// userName ek string variable hai jisme "Zaid" store hai
let greeting: string = `Hello, ${userName}`;  
// greeting me template literal use karke text aur variable combine kiya

console.log("String examples:", userName, greeting);
// → Yeh line userName aur greeting print karegi

// 3. Boolean → Sirf true ya false values
let isLoggedIn: boolean = true;     
// isLoggedIn me true set kiya, matlab user ne login kar liya
let hasPermission: boolean = false; 
// hasPermission me false set hai, matlab permission nahi mili

console.log("Boolean examples:", isLoggedIn, hasPermission);
// → true aur false dono print honge

// 4. Any → Kisi bhi type ko accept karta hai (lekhnha safe practice nahi)
let data: any = "Hello"; // pehle string assign ki
console.log("Any before:", data);
// ab data ko number banate hain
data = 10;
console.log("Any as number:", data);
// phir data me boolean assign karte hain
data = true;
console.log("Any as boolean:", data);
// → Any type me alag-alag types assign kar sakte hain

// 5. Unknown → Any ke jaise, par safe use ke liye type check zaroori
let value: unknown = "TypeScript"; 
// value unknown type ka hai, use directly methods nahi laga sakte
if (typeof value === "string") {
  // pehle typeof se check kiya ki value string hai
  console.log("Unknown example:", value.toUpperCase());
  // agar string hai to toUpperCase safe hai
}

// 6. Array → Same type ki multiple values ek saath
let marks: number[] = [85, 90, 95];              
// marks array me numbers ka list hai
let fruits: string[] = ["apple", "banana", "mango"]; 
// fruits array me strings ka list

console.log("Array examples:", marks, fruits);
// → Dono arrays print honge

// 7. Tuple → Fixed length aur fixed type ka array
let person: [string, number] = ["Zaid", 22];
// person tuple me pehla element string (naam), dusra number (umar)
let address: [string, number] = ["Mumbai", 400612];
// address me pehla city, dusra pin code

console.log("Tuple examples:", person, address);
// → Tuple values print hongi

// 8. Enum → Fixed set of named constants
enum Direction {
  North,
  South,
  East,
  West
}
// Direction enum me sirf North/South/East/West hi valid hain
let move: Direction = Direction.North;
// move variable me North assign kiya

console.log("Enum example:", Direction[move]);
// → Enum ki string value print karne ke liye index se access kiya

// 9. Object → Key-value pairs ka group
let user: { name: string; age: number } = {
  name: "Zaid",  
  age: 22        
};
// user object me name aur age keys ke saath values rakhe

console.log("Object example:", user);
// → Object pura print hoga

// 10. Null & Undefined → Value na hone ya intentionally empty
let middleName: string | null = null;       
// middleName me null assign kiya, jab value intentionally empty ho
let height: number | undefined = undefined; 
// height me undefined hai, jab value set hi nahi hui

console.log("Null & Undefined:", middleName, height);
// → null aur undefined print honge

// 11. Union → Ek variable multiple types accept kar sakta hai
let userId: number | string = 101;  
console.log("Union as number:", userId);
// pehle number assign kiya
userId = "user101";                  
console.log("Union as string:", userId);
// ab string assign kiya

// 12. Literal → Sirf kuch specific values hi valid
let responseStatus: "success" | "failure" = "success"; 
// responseStatus variable me sirf 'success' ya 'failure' hi allow hai

console.log("Literal example:", responseStatus);
// → 'success' print hoga

// 13. Function return type → Function kya type return karega
function add(a: number, b: number): number {
  // dono parameters number hone chahiye
  return a + b;  
  // number return hota hai
}
console.log("Function add example:", add(10, 20));
// → 30 print karega

// 14. Void → Function jo kuch return nahi karta
function greet(): void {
  // koi value return nahi kar raha
  console.log("Function greet example: Welcome to the TypeScript world");
}
greet();
// → Greeting message print hoga

// 15. Never → Function jo kabhi normal return nahi hota
function throwError(): never {
  // function yahan par error throw karke end ho jayega
  throw new Error("Something went wrong");
}
// throwError(); // Uncomment karoge to program yahin crash ho jayega
