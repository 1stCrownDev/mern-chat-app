import express from 'express';
import dotenv from 'dotenv';
const app = express();
import { createServer } from 'http';
import cors from 'cors';
//import { mongoose } from 'mongoose';
const server = createServer(app);

dotenv.config();
const PORT = process.env.PORT || 5000;

// Mongo DB Connections
/*
mongoose.connect(process.env.MONGODB_URI).then(response=>{
    console.log('MongoDB Connection Succeeded.')
}).catch(error=>{
    console.log('Error in DB connection: ' + error)
});*/


// Middleware Connections
app.use(express.urlencoded({ extend: true }));
app.use(express.json());
app.use(cors());


// Routes
app.get("/", (req, res) => {
    res.send("Hello, Welcome to CrownChats!")
})

// Connection
app.listen(PORT, ()=>{
    console.log(`App running on Port: ${PORT}`)
})