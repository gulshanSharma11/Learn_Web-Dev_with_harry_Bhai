

import BasicExample from './Components/Navbar';
import { useState } from 'react';
function App() {
  const [count,SetCount]=useState(0);
 
  return (
    
    <div className="App">
    <BasicExample/>
      <p>Hello ji</p>
      <div >{count}</div>
      <button onClick={()=>{SetCount(count+1)}}>Click me</button>
    </div>
  );
}

export default App;
