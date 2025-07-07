const todoModels = require('../models/todoModels');

module.exports.getTodo = async(req,res)=>{
    const todo = await todoModels.find();
    res.send(todo);
}

module.exports.saveTodo = async(req,res)=>{
    const {title}  = req.body;
    todoModels.create({title})
    .then((data)=>{
        console.log("Added successfully");
        console.log(data);
        res.json(data)
    })
    .catch((error)=> console.log('error saving todo:',error))
}

module.exports.deleteTodo = async(req,res)=>{
    const {_id} = req.body
    todoModels
    .findByIdAndDelete(_id)
    .then(()=> res.send("Deleted successfully"))
    .catch((e)=>console.log("error:",e))
}