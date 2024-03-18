import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";


function App() {
  const [count, setCount] = useState(0);
  const [ybutton, setbutton] = useState(false);
  const [todos, setTodos] = useState([
    {
      name: "Hey",
      class: 10,
    },
    {
      name: "Gullu",
      class: 12,
    },
    {
      name: "Rahul",
      class: 17,
    },
  ]);
  const [stodos,setSTodos]=useState(false);

  // const Tota=({tota})=>{
  // return (<>
  //       <div>{tota.name}</div>
  //       <div>{tota.class}</div>
  // </>)};
  
   
  const listTodos = () => {
    return (todos.map((todo) => (
      <div key={todo.name}>
        <div>{todo.name}</div>
        <div>{todo.class}</div>
      </div>
    )))
  }
    
  

  return (
    <>
      
      <div>
        <a href="https://vitejs.dev" target="_blank">
          <img src={viteLogo} className="logo" alt="Vite logo" />
        </a>
        <a href="https://react.dev" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div>
      <h1>Vite + React</h1>
      <div className="card">
        <button onClick={() => setCount((count) => count + 1)}>
          count is {count}
        </button>
        <br />
        {/* {ybutton && <button >
          Show btn is true
        </button>}<br/> */}

        {ybutton ? (
          <button>count is true</button>
        ) : (
          <button>count is false</button>
        )}
        <button
          onClick={() => {
            setbutton(!ybutton);
          }}
        >
          toggle btn
        </button>
        <p>
          Edit <code>src/App.jsx</code> and save to test HMR
        </p>
        
        
      </div>
      <p className="read-the-docs">
        Click on the Vite and React logos to learn more
      </p>
      
      <button onClick={()=>setSTodos(!stodos)}>see list</button>
      {stodos && listTodos()}
    </>
  );
}

export default App;
