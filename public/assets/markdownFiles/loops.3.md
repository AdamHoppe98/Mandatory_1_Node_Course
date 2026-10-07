# Loops in javascript:

In javaScript we have the traditional for loops.

## for loops

```javascript
const array = ["a", "b", "c"];
for (let i = 0; i < array.length; i++){
}
```

```javascript
const array = ["a", "b", "c"];
for (const letter of array ) {
}
```

---

## loop methods
We also have loop methods that we can use on arrays like: 

#### .map()

.map() takes a callback function, that can have element, index and array as paramters.
```javascript
.map((element, index, array) => console.log(element, index, array))
```
.map() returns an array the same size as the original 1:1 with each being the result of the callback function.  

Element is a reference to the element from the original array, so if possible use the new array because you could have mutated the original array where you did not meant to do it.

```javascript
const people = [
    {
        name: "Adam"
    }
];
const newArray = people.map((person) => {
    if (person.name === "Adam"){
        person.name = "Morten";
    }
    return person;
});

console.log(people) // logs { name: "Morten" } to the console
```

You could do this without mutating the original array, but you should still try to always use the new array if you can.

```javascript
.map((person) => {
    return { name: person.name === "Adam" ? "Morten" : person.name }
})
```
Here we return a new object into our new array instead of mutating the element of the orginal and then returning that.

---
### .filter()

.filter() also returns a new array with all the elements that pass a test.

```javascript
const numbers = [1, 2, 3, 4];
const evenNumbers = numbers.filter((number) => number % 2 === 0);
console.log(evenNumbers) // logs [ 2, 4 ]
```

If the boolean statement is true then that element gets returned into the new array.
.filter() can also access element, index and array, like .map() can.


---
### .find()

.find() returns the first element found iterating through an array.

```javascript
const array = ["a", "b", "c"];
const findA = array.find((letter) => letter === "a")
console.log(findA) // logs a
```

when the callback function returns true, it stops iterating over the array and returns that element, in this case "a".  
if no match is found .find() returns undefined.  


---
### .findIndex()

alot like .find() but instead of returning the element it returns the index.  
```javascript
const array = ["a", "b", "c"];
const findA = array.findIndex((letter) => letter === "a")
console.log(findA) // logs 0
```

.findIndex() and .find() both have access to: 

```javascript
.findIndex((element, index, array) => {})
.find((element, index, array) => {})
```
And one returns the element and the other the index on the first match of the boolean statement.

---

### .forEach()

.forEach() does not return anything, so should only be used when you don't need the data afterwards.

```javascript
const array = ["a", "b", "c"];
array.forEach((letter) => console.log(letter));
```