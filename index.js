import express from "express";

const app = express();
app.use(express.json());

const products = [
  { id: 1, name: "Product 1"},
  { id: 2, name: "Product 2"},
  { id: 3, name: "Product 3"},
];

app.get("/products", (req, res) => {
  res.send(products);
});

app.put("/products/:id", (req, res) => {
  const { id } = req.params;
  const { name } = req.body;

  const product = products.find((p) => p.id === Number(id));
  if (!product) {
    return res.status(404).json({ message: "Product not found" });
  }

  if(name) {
    product.name = name;
  }

  res.status(301).json({ 
    message: "Product updated successfully", 
    allProducts: product 
  }); 

})


app.delete("/products/:id", (req, res) => {
  const { id } = req.params;  


  const index = products.findIndex((p) => p.id === Number(id));

   if (index === -1) {
    return res.status(404).json({ message: "Product not found" });
  }

  const deleted =  products.splice(index, 1);

  res.json({
    message: "Product deleted successfully",
  });

  res.json({
    message: "Product deleted successfully"
  })

})

app.get("/users", (req, res) => {
  res.send("Hello World");
});

app.post("/users", (req, res) => {
  try {
    const { name } = req.body;
    if (!name) {
      return res.status(400).json({ message: "Name is required" });
    }
    users.push(name);
    res.status(201).json({ 
      message: "User added successfully", 
      allusers: users 
    });
    
  } catch (error) {
    res.status(501).json({ message: "Internal Server Error" });
  }
});





app.listen(8842, () => {
  console.log("Server is running on http://localhost:8842");
})