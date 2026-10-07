# variables in javaScript: 

### Const:

In javaScript we have 3 variables let, var and const.

Let's start with const, const is **constant** in it's assignment, meaning you can not change that animal's value is 'Monkey'.

```javascript
const animal = "Monkey";
animal = "Elephant"; // not allowed, will throw a typeError
```

However if that assignment is to a object, you can still not change what object the const is assigned too. But you can the values of the object.  

```javascript
const car = { name: "Peel P50" }
car.name = "Reliant Roben"; // allowed
console.log(car) // { name: 'Reliant Roben' }
```

here we are allowed to change the name of the car becuase we don't change the assignment, it is still assigned the same object, but the value inside have changed.  

--- 

### Let:

Let is different to const in that it can be reassigned

```javascript
let animal = "Monkey";
animal = "Elephant"; // allowed when let
```

The thing to watch out for with let is that the variable can also change the data type that it holds. Which can be quite dangerous if you don't notice that the value is now a diferent data type.  

If for example try to cast a string to a number and use the same variable, you might later on in the code try a string method on a number.  

```javascript
let two = "2";
two = Number(two);
console.log(two.toLowerCase());
```

you should always try to use const everytime you can and if you need the value to change, assign it to a new variable. This way you avoid the above example.  

If you need to have a counter you can use let.

---

### Var:

var is depricated and is not recommended to use anymore.