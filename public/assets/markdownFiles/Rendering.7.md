# Rendering


Adding this to the top of our app.js file, serves all our files in our public folder. If we didnt do this, our hmtl file would not be able to locate our css and js files.

```javascript
app.use(express.static('public'));
```

### Client-side rendering  


```javascript
import path from 'path';
app.get('/', (req, res) => {
    res.sendFile(path.resolve('public/frontpage/index.html')); // turns the path into an absolute path 
});
```

Here we send our index.html file to our user when they request /.  

If we also have a frontpage.js file, that will be send aswell and therefor it is the client rendering the page.  

But you can also render it on the server before sending it.

---

### Server side rendering:

```javascript
import fs from 'fs';
app.get('/', (req, res) => {
    const indexHtml = fs.readFileSync('public/frontpage/index.html', 'utf-8'); // sync means it waits for the file is read to move on. utf-8 converts it to text
    res.send(indexHtml); 
});
```

File system is default in node, you just have to import it. 

#### Components:

We can use components to make things easier and more reusable.   

```javascript

app.get('/', (req, res) => {
    const header = fs.readFileSync('public/header/header.html', 'utf-8');
    const footer = fs.readFileSync('public/footer/footer.html', 'utf-8');
    const frontpage = fs.readFileSync('public/frontpage/frontpage.html', 'utf-8');
    res.send( header + frontpage + footer); 
});
```

Here we can only have to make header and footer once, and can reuse them for all our pages.

```javascript
app.get('/secondPage', (req, res) => {
    const header = fs.readFileSync('public/header/header.html', 'utf-8').replace('{{title}}','second page');
    const footer = fs.readFileSync('public/footer/footer.html', 'utf-8');
    const secondPage = fs.readFileSync('public/secondPage/secondPage.html', 'utf-8');
    res.send( header + secondPage + footer); 
});
```
```html
<title>{{title}}</title>
```
If we want a dynamic header thats a little different than the one from the frontpage we can use replace. or replaceAll if we have more than one occurance.  
But we also have to replace it in the fronpage.  

--- 

