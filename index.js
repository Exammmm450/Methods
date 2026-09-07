import express from 'express'

const app = express()
app.use(express.json())

const users = [
    {id: 1, name : 'John', age: 25},
    {id: 2, name : 'Jane', age: 30},
    {id: 3, name : 'Doe', age: 22}
]

app.get("/", (req, res) => {    
    res.send("Hello World")
})

app.get("/users", (req, res) => {
    res.send(users)
})

app.get("/users/:id", (req, res) => {
    const id = req.params.id
    const name = req.query
    const age = req.query
    
    const user = users.find(x=> x.id == id)
})


   app.get("/search", (req, res) => {
  const { name, price, minPrice, maxPrice } = req.query; 
  let result = fruits;
  if (name) {
    result = result.filter((x) => x.name.includes(name));
  }
  if (price) {
    result = result.filter((x) => x.price === Number(price));
  }

  res.json(result); 
});

    app.listen(6491, () => {
    console.log("Server is running on port http://localhost:6491")
})