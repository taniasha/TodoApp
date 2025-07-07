const mongoose = require('mongoose'); //mongoose is a nodejs lib used to connect to mongodb 


const todoSchema = new mongoose.Schema({
    title: { type: String, required: true}
})

module.exports = mongoose.model('Todo', todoSchema);//creates a model named "Todo"