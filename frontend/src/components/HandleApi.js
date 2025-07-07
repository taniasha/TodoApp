import axios from 'axios';

const baseUrl = 'http://localhost:5000';

const getAllTodos = (setTodo)=>{
    axios
    .get(baseurl)
    .then(({data})=> {
        console.log('Data--->',data);
        setTodo(data);
    })
}