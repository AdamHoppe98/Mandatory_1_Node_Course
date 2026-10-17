# Node.js: 


install [node](https://nodejs.org/en/download)


To set up a server create a app.js file in the root of your project.  

you can then set it up to ways:  

---

## Express: 

We are gonna be running our server with express, express does not come defualt with node, we need to install it and add the dependency.  

```bash
npm install express
```

Running this command in the root of the project, creates a node_modules, package-lock.json and a package.json.  

You can also yourself create a package.json and add this code: 

```JSON
{
    "dependencies": {
        "express": "5.2.1"
    }
}
```

then you can run 

```bash
npm install 
```

That will then install the express dependency and create package-lock.json and a node_modules folder. The same as the first comman.  

---

## Common js
```javascript
const express = require('express');
const app = express();


app.listen(8080);
```
These 3 lines start a sever on port 8080, the first line imports 'express',  and after create an application instance and save it in app.  

Have your HTTP methods in between app and app.listen. Else those methods can't be called.  


## Es modules 

```javascript
import express from 'express';
const app = express();


app.listen(8080);
```

this is the newest way to import.

--- 


## Starting server:

In a terminal that root or in a folder with an express server:
```bash
node app.js
```
This starts a server on port 8080 if you in the file told it 8080.  

if you make a change to app.js and want to use that change, close the connection by ctrl-c and start the server again.  

Or instal nodemon and whenever it detects a change in a js file, it will rerun the server to have the changes.
```bash
npm install -g nodemon # or using yarn: yarn global add nodemon
```
And nodemon will be installed globally to your system path.


---


### JSON:

```javascript
app.use(express.json());
```

Have this line in the top of your project, when you need to parse the JSON from the body of a HTTP request.  
So when you have a POST request you can then read the body, else it will become undefined.