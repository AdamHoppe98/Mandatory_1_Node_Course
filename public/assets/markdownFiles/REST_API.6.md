# REST Api

| HTTP Method | Endpoint | Description |
| ----------- | -------- | ----------- |
| GET         | /cars | retrieves all Cars |
| GET         | /cars/{id} | retrieves one Car |
| POST        | /cars | creates a car resource |
| PUT         | /cars/{id} | replaces a car resource |
| PATCH       | /cars/{id} | updates a specific car resource |
| DELETE      | /cars/{id} | deletes a specific car resource |

--- 

Table above is an example of a REST Api design, the endpoint is always the plural version of the resource, cars, animals, plants and so on.  

When following the REST Api conventions always put the methods in the order in the file of the design. So get first then post then put and so on. That way when a another has to find the get method it should always be at the top, easy to find.    

--- 

## HTTP Methods:

We use the app we created in app.js shown in Node page. Remember all the methods are in between app variable and listen.  

These endpoint methods are also called routes. 

---
#### GET:

```javascript
const cars = [{ name: "toyota", id: 1}, { name: "ford", id: 2 }]
app.get('/cars', (req, res) => {
    res.send({ data: cars })
});

app.get('/cars/:id', (req, res) => { // :id is the path parameter, and can be accessed by the req. reg.params.id
    const providedId = Number(req.params.id);
    const foundCar = cars.find((car) => cars.id === providedId);
    if (isNaN(providedId)){
        return res.status(400).send({ data: `the parameter must be a number` }); // remember to return here, because we cant send multiple res.send(), will throw and error.
    }
    if (!foundCar) {
        return res.status(404).send({ errorMessage: `No car found by id ${providedId}` });
    }
    res.send(foundCar);
});
```
---

#### Post: 

```javascript
let nextId = 1;
app.post('/cars', (req, res) => {
    const providedCar = req.body; // this is how you acces the body of the request
    providedCar.id = nextId++; // if id was sat in the req.body, this will override that. And set it with our id.

    cars.push(providedCar);
    res.status(201).send({data: providedCar});
});
```
---

#### PUT:

```javascript
app.put('/cars/:id', (req, res) => { // put replaces the whole resource 
    const providedId = Number(req.params.id);
    const foundIndex = cars.findIndex(car => car.id === providedId);  // use findIndex so we can replace the resource at the right place in the array. 

    if (isNaN(providedId)){
        return res.status(400).send({ data: `the parameter must be a number` })
    }
    if (foundIndex === -1) {
        return res.status(404).send({ errorMessage: `No car found by id ${providedId}` })
    }
    const name = req.body;
    if (typeof name !== 'string') {
        return res.status(400).send({ data: 'name are required' });
    }
    const updatedAnimal = { name, id: providedId };
    animals[foundIndex] = updatedAnimal;

    res.send({ data: updatedAnimal });
});
```

---
#### PATCH: 

```javascript
app.patch('/cars/:id', (req, res) => {

    const providedId = Number(req.params.id);
    const foundIndex = cars.findIndex(car => car.id === providedId);  // use findIndex so we can replace the resource at the right place in the array. 

    if (foundIndex === -1) {
        return res.status(404).send({ errorMessage: `No car found by id ${providedId}` })
    }
    const providedCar = req.body;
    const foundCar = cars[foundIndex];

    const carToCreate = { ...foundCar, ...providedCar, id: providedId } // ... spread the object out, and the later one overwrites the first. so if providedCar has "name", then it overwrites it.

  
    cars[foundIndex] = carToCreate;
    res.send({ data: carToCreate });
})
```
---
#### DELETE:

```javascript
app.delete('/cars/:id', (req, res) => {
    const providedId = Number(req.params.id);
    const foundIndex = cars.findIndex(car => car.id === providedId);

    if (foundIndex === -1) {
        return res.status(404).send({ errorMessage: `No car found by id ${providedId}` })
    }

    cars.splice(foundIndex, 1);
    res.status(204).send();
});
```