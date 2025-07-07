import React, { useEffect, useState } from 'react';
import '../index.css';

export default function TodoApp() {
  const [input, setInput] = useState('');
  const [todos, setTodos] = useState([]);


  //fetching data
  useEffect(()=>{
    fetch('http://localhost:5000/')
    .then((response)=>{ return response.json(); })
    .then((data)=> setTodos(data) )
  .catch((err)=> console.log('error ',err))
  },[])


  const handleInput = (e) => {
    setInput(e.target.value);
  };


  //Add data to todo
  const handleAddTodo = () => {
    if(input.trim()==='') return ;

    fetch('http://localhost:5000/save',{
      method:'POST',
      headers: {'Content-Type':'application/json'},
      body:JSON.stringify({title:input})
    })
    
    .then((response)=>  response.json())
    .then(data=>{
     setTodos((prev) => [...prev,data])
     setInput('')
    })
    .catch((error)=> console.log(error))
  };


  // 🗑️ Delete by index
  const handleDelete=(id)=>{

    fetch('http://localhost:5000/delete',{
      method:'POST',
      headers:{'Content-Type':'Application/json'},
      body:JSON.stringify({_id:id}),
    })

    .then((response)=> response.json())
    .then((data)=>{
      setTodos((prevTodos)=>{ return prevTodos.filter(todo => todo._id !== id)})
    })
    .catch((err)=>err)
  }
// When you use curly braces {} in an arrow function, you must explicitly write return. Otherwise, nothing is returned
  
  return (
    <>
      <section className="todo-app">
        <div>
          <label htmlFor="text">Enter Task: </label>
          <input
            type="text"
            id="text"
            placeholder="Enter your task"
            onChange={handleInput}
            value={input}
          />
          <button onClick={handleAddTodo}>Add</button>
        </div>

        <ul className='card'>
          {todos.map((todo) => (
            <li key={todo._id} style={{ color: 'white' }}>
              {todo.title}
              <button
                style={{ marginLeft: '10px', backgroundColor: 'red', color: 'white' }}
                onClick={() => handleDelete(todo._id)}
              >
                ❌
              </button>
            </li>
          ))}
        </ul>
      </section>
    </>
  );
}
