const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const routes = require('./routes/todoRoutes');

require('dotenv').config()

const app = express();// app can now use to create routes
const PORT = process.env.port || 5000; //either environmnet varibale either 5000
app.use(cors())
app.use(express.json())

mongoose.connect('mongodb://localhost:27017/todo')
.then(()=> console.log('Database Connected'))
.catch((err)=> console.log('Error',err))

app.use(routes);

app.listen(PORT,()=>{
    console.log(`Listening on : ${PORT}`);
})
