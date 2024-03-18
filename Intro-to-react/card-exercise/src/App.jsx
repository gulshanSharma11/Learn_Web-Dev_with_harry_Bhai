import { useState } from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
import BasicExample from './components/card.jsx';

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <h1 className="text-3xl font-bold underline">
      Hello world!
    </h1>
    <BasicExample/>
    </>
  )
}

export default App
