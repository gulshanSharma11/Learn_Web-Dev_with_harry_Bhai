import { useState, useEffect } from 'react'
import Navbar from './components/Navbar.jsx';
import './App.css'

function App() {
  const [todo, setTodo] = useState("");
  const [todos, setTodos] = useState([]);

  const handelChange = (e) => {
    setTodo(e.target.value);
  }


  const handelEdit = () => {

  }


  const handelAdd = () => {
    setTodos([...todos, { todo, isCompleted: false }])
    setTodo("")
    console.log(todos)
  }

  const handelDelete = () => {

  }

  return (
    <>
      <Navbar />

      <div className="container mx-auto my-5 rounded-xl p-5 bg-violet-100 min-h-[80vh]">
        <div className="addTodo">
          <h2 className="text-lg font-bold"> Add a Todo</h2>
          <input onChange={handelChange} value={todo} type="text" />
          <button onClick={handelAdd}  className="bg-violet-800 hover:bg-violet-950 p-3 py-1 text-white rounded-md mx-6">Add</button>
        </div>
        <h2 className="text-lg font-bold">Your Todos</h2>
        <div className="todos">
          {todos.map(item => {

            return <div className="todo flex w-1/2 justify-between m-5">
            <input type="checkbox" value={todo.isCompleted} name="" id="" />
              <div className={item.isCompleted ? "line-through" : ""}>{item.todo}</div>
              <div className="button">
                <button onClick={handelEdit} className="bg-violet-800 hover:bg-violet-950 p-3 py-1 text-white rounded-md mx-6">Edit</button>
                <button onClick={handelDelete} className="bg-violet-800 hover:bg-violet-950 p-3 py-1 text-white rounded-md mx-6">Delete</button>
              </div>
            </div>
          })}
        </div>
      </div>
    </>
  )
}

export default App
