const express = require("express");
const cors = require("cors");
const jwt = require('jsonwebtoken');
const { MongoClient, ServerApiVersion, ObjectId } = require("mongodb");
const app = express();
require("dotenv").config();
const PORT = process.env.PORT || 5000;

app.use(cors());
app.use(express.json());

const uri = `mongodb+srv://${process.env.USER_NAME}:${process.env.USER_KEY}@cluster0.qdm6nzz.mongodb.net/?retryWrites=true&w=majority`;

const client = new MongoClient(uri, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
  serverApi: ServerApiVersion.v1,
});

function verifyJWT(req, res, next) {
  const authHeader = req.headers.authorization;
  if (!authHeader) {
    return res.status(401).json({
      status: 401,
      message: "Unauthorized",
    });
  }

  const token = authHeader.split(' ')[1];
  jwt.verify(token, process.env.ACCESS_TOKEN, function (err, decodedToken) {
    if (err) {
      return res.status(403).json({
        status: 403,
        message: "Forbidden",
      });
    }
    console.log(decodedToken)
    req.decodedToken = decodedToken;
    next();
  });
}

async function run() {
  try {
    const serviceCollection = client.db("photozzz").collection("services");
    const blogsCollection = client.db("photozzz").collection("blogs");
    const commentsCollection = client.db("photozzz").collection("comments");
    const usersCollection = client.db("photozzz").collection("users");

    app.get("/services3", async (req, res) => {
      const query = {};
      const cursor = serviceCollection.find(query).limit(3);
      const services = await cursor.toArray();
      res.send(services);
    });
    app.get("/services", async (req, res) => {
      const query = {};
      const cursor = serviceCollection.find(query);
      const services = await cursor.toArray();
      res.send(services);
    });
    app.get("/services/:id", async (req, res) => {
      const id = req.params.id;
      const query = { _id: ObjectId(id) };
      const service = await serviceCollection.findOne(query);
      res.send(service);
    });
    app.post("/services", async (req, res) => {
      const comment = req.body;
      const result = await serviceCollection.insertOne(comment);
      res.send(result);
    });
    app.get("/reviews",verifyJWT, async (req, res) => {
      const email = req.query.email 
      const decodedEmail = req.decodedToken.email

      if(email !== decodedEmail){
        return res.status(403).json({
                  status: 403,
                  message: "Forbidden",

        })
      }
      const query = {email: email}
      const result = await commentsCollection.find(query).toArray()
      res.send(result)
    });

    app.delete('/reviews/:id', async(req,res)=>{
      const id = req.params.id 
      const query = {_id: ObjectId(id)}
      const result = await commentsCollection.deleteOne(query)
      res.send(result)
    })
  



    app.get("/comments", async (req, res) => {
      const id = req.query.id;
      const query = { serviceId: id };
      const result = await commentsCollection.find(query).toArray();
      res.send(result);
    });

    app.post("/comments", async (req, res) => {
      const comment = req.body;
      const result = await commentsCollection.insertOne(comment);
      res.send(result);
    });
    app.get('/jwt', async(req,res)=>{
      const email = req.query.email
      const query = {email:email}
      const user = await usersCollection.findOne(query)
  
      if(user){
        const token = jwt.sign({email},process.env.ACCESS_TOKEN,{expiresIn:'1h'})
        return res.send({accessToken: token})
      }
      res.status(403).send({accessToken:''})
    })
  
  app.post('/users', async(req,res) => {
    const user = req.body;
const results = await usersCollection.insertOne(user)
res.send(results)
  })
    
   

    app.get("/blogs", async (req, res) => {
      const query = {};
      const cursor = blogsCollection.find(query);
      const blogs = await cursor.toArray();
      res.send(blogs);
    });
    app.get("/blogs/:id", async (req, res) => {
      const id = req.params.id;
      const query = { _id: ObjectId(id) };
      const blogs = await blogsCollection.findOne(query);

      res.send(blogs);
    });
  } finally {
  }
}
run().catch((e) => console.log(e));

app.get("/", (req, res) => {
  res.send("server running");
});

app.listen(PORT);
