# Data Types:

there are 8 different data types

```javascript
"" or '' // string 
10 // number
true // boolean
undefined // undefined
null // null
{} // object
12394870329579023874283947n or BigInt(12394870329579023874283947) // Bigint
Symbol() // symbol is last one that i am not gonna cover
```
---
### String:

when using string you can use "" or '' interchangeably, when using those you can only have them on one line. 
If you need to have a string hold more text or just go multiple lines use backticks ``.
```javascript
const string = ` 
    hej med dig
`
```
with backticks you can also evaluate javascript code inside of the ticks.

```javascript
const name = " Adam "
console.log(`hej med dig ${name.trim()}`)
```
Here .trim() is being called on the name, which returns a string, and the ${} then places that string into that spot.

---

### Number: 

```javascript
let foo = 123; // this is a number
let bar = 999.999; // also a number
```
In JavaScript, the number type holds both whole numbers and numbers with decimals. 
Both of them are 64-bits, which means if the number becomes too big, you need to use bigint.

Often you want to parse a string into a number, there are 2 most common ways to do that.

```javascript
const number = parseInt("123");
console.log(number) // 123 as a number

const number2 = Number("500")
console.log(number2); // 500 as a number

const notANumber = parseInt("123hej");
console.log(notANumber) // 123 as a number

const NotANumber2 = Number("500hej")
console.log(NotANumber2); // NAN 
```
parseInt() reads from the start and stop at the first character.
Use Number() when the whole value should be a number, use parseInt when you want the leading numbers from a string.

---

### Undefined and null: 

both undefined and null means this variable is empty, but how they are set is a bit different.

```javascript
let a;
console.log(a) // undefined
let b = null;
```

Undefined javascript gives you this value because the variable was never set a value.
Null you set this on purpose to empty to show that it is empty.  

Both undefined and null are falsy, which means that if they are inserted into a boolean statement they will return false.

```javascript
if(null) {
    console.log("inside if") // does not print 
}
if(!null) {
    console.log("inside if ") // logs to the terminal
}
```
```javascript
0  
""         
NaN
```
All of these are also falsy.


---

### Object: 

Object is written with key value pair inside of curly brackets. 

```javascript
const object = { name: "Adam", age: 27 }
const objectWithout = {}
```

object is also considered truthy, which means if you have them inside a if, they return true.

```javascript
const object = {}
if(object) {
    // inside here if we have an object, outside if object is null or undefined.
}
```

# Array: 

array is also an object, but with numeric keys.  

```javascript
const array = ["a", "b", "c"]
const b = array[1] // key to get "b" is 1 because index starts at 0
```
Array has a bunch of methods that i show in **loops**