# Date:


```javascript
new Date();
```

Javascript has built in New Date that returns a date object, that works in both the browser and in node.  

```javascript
const now = new Date();
console.log(now); // 2026-10-17T09:30:12.345Z
console.log(now.getTime()); // returns ms since 1 jan 1970 utc, Unix epoch

console.log(new.getMonth()); // returns the number for the month, january is 0 and december is 11.

const currentMonth = new Date().toLocaleDateString('en-dk', { month: 'long' });
console.log(currentMonth); // you get the name value of the month.
```

