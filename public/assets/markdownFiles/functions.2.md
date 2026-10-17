# Functions:  

A function can be written 3 different ways in javascript.  

```javascript
function Function(){ // most common function, is hoisted so can be called above function.
    return 2;
}

const arrowFunction = arrow => { // arrow function saved in a variable. 
    return "arrow";
}

const anonymousFunction = function () { // annonymous function also saved in a variable
    return []
}
```

Functions as first-class citizens. Meaing i can do with functions what i can do with other data types.  
These operations typically include assigning functions to variables, passing them as arguments to other functions, and returning them from functions.  

```javascript 
function constructName(name){
    return name + " hoppe"
}

function toString(name, action) {
    return action(name);
}

console.log(toString("Adam", constructName))
```

callback function: a function reference provided as an argument with the possibility of being called later. The function is not called immediately, but rather passed as a reference to be invoked at a later time.  
```javascript
console.log(toString("Adam", (name) => `${name} Hoppe`)) // with a callback function toString() can call the function later.
```