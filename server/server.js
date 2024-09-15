const express = require('express');
const app = express();
const cors = require('cors');
const { default: mongoose } = require('mongoose');
const server = createServer(app);
const createServer = require('http');

require('dotenv').config();
const PORT = process.env.PORT || 5600;

// Mongo DB Connections
mongoose.connect(process.env.MONGODB_URI, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
}).then(response=>{
    console.log('MongoDB Connection Succeeded.')
}).catch(error=>{
    console.log('Error in DB connection: ' + error)
});


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
    console.log('App running in port: '+PORT)
})