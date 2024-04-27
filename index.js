const express = require('express');
const cors = require('cors');
require('dotenv').config();
const { MongoClient, ServerApiVersion } = require('mongodb');
const app = express();
const port = process.env.PORT || 5000;

// middleware
app.use(cors());
app.use(express.json());

// paintingMaster
// 71LZXW2n8ssD9UtL



const uri = `mongodb+srv://${process.env.DB_USER}:${process.env.DB_PASS}@cluster0.cg4ihxy.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0`;

console.log(uri)

// Create a MongoClient with a MongoClientOptions object to set the Stable API version
const client = new MongoClient(uri, {
  serverApi: {
    version: ServerApiVersion.v1,
    strict: true,
    deprecationErrors: true,
  }
});

async function run() {
  try {
    // Connect the client to the server	(optional starting in v4.7)
    await client.connect();

    const CraftCollection = client.db("paintingDB").collection("Landscape_Painting");
    const ArtCollection = client.db("paintingDB").collection("Portrait Drawing");
    const PrintCollection = client.db("paintingDB").collection("Watercolor Painting");
    const DratCollection = client.db("paintingDB").collection(" Oil Painting");
    const AnyCollection = client.db("paintingDB").collection("Charcoal Sketching");
    const AtCollection = client.db("paintingDB").collection("Cartoon Drawing");

    const userCollection = client.db('paintingDB').collection("user");

    app.post('/craft', async(req, res) =>{
      const newCraft = req.body;
      console.log(newCraft)
      const result = await AtCollection.insertOne(newCraft);
      res.send(result);
  })

    app.post('/craft', async(req, res) =>{
      const newCraft = req.body;
      console.log(newCraft)
      const result = await AnyCollection.insertOne(newCraft);
      res.send(result);
  })

    app.post('/craft', async(req, res) =>{
      const newCraft = req.body;
      console.log(newCraft)
      const result = await DratCollection.insertOne(newCraft);
      res.send(result);
  })
 
    app.post('/craft', async(req, res) =>{
      const newCraft = req.body;
      console.log(newCraft)
      const result = await PrintCollection.insertOne(newCraft);
      res.send(result);
  })


    app.post('/craft', async(req, res) =>{
      const newCraft = req.body;
      console.log(newCraft)
      const result = await CraftCollection.insertOne(newCraft);
      res.send(result);
  })


    app.post('/craft', async(req, res) =>{
      const newCraft = req.body;
      console.log(newCraft)
      const result = await ArtCollection.insertOne(newCraft);
      res.send(result);
  })




  



  

// user related apis
app.post('/user', async(req, res) =>{
  const user = req.body;
  console.log(user);
  const result = await userCollection.insertOne(user);
  res.send(result);
})

    // Send a ping to confirm a successful connection
    await client.db("admin").command({ ping: 1 });
    console.log("Pinged your deployment. You successfully connected to MongoDB!");
  } finally {
    // Ensures that the client will close when you finish/error
    // await client.close();
  }
}
run().catch(console.dir);


app.get('/', (req, res) =>{
    res.send('making server is running')
})

app.listen(port, () =>{
    console.log(`server is running on port: ${port}`)
})