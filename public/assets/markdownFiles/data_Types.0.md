# Data Types

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