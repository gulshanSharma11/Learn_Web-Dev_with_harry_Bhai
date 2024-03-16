import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import BasicExample from './components/Card.jsx'
import NavScrollExample from './components/Navbar.jsx'
import 'bootstrap/dist/css/bootstrap.min.css';

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    <NavScrollExample/>
    <div style={{display:"flex", justifyContent: "space-around" , marginTop:"20px"}}>
   <BasicExample title="Java" description="Hello Some quick example text to build on the card title and make up the bulk of the card's content."/>
   <BasicExample title="Python" description="Python is a popular programming language. Python can be used on a server to create web applications."/>
   <BasicExample title="JavaScript" description="JavaScript is the world's most popular programming language.JavaScript is the programming language of the Web."/>
   <BasicExample title="React" description="Hello Some quick example text to build on the card title and make up the bulk of the card's content."/>
   </div>
      {/* <div>
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
        <p>
          Edit <code>src/App.jsx</code> and save to test HMR
        </p>
      </div>
      <p className="read-the-docs">
        Click on the Vite and React logos to learn more
      </p> */}
    </>
  )
}

export default App
