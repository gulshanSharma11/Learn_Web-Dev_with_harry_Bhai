import { useState,useEffect } from 'react'

import BasicExample from './components/Card.jsx'
import NavScrollExample from './components/Navbar.jsx'
import 'bootstrap/dist/css/bootstrap.min.css';
import { useRef } from 'react';

function App() {
  const [count, setCount] = useState(0);
  // useEffect(()=>{

  // //  let a= document.getElementById('new');
  // //  a.innerHTML=Math.random();
  // // function main(){
  // //   <BasicExample title="Java" description="Hello Some quick example text to build on the card title and make up the bulk of the card's content."/>
  // // }
  //  let a =document.getElementById('new')
  //  a.appendChild(document.createElement("p"));
  // },[count]);
  const a=useRef();
  // useEffect(()=>{
  //   alert(`count has changed ${count}`)
  //   a.current=a.current+1;
  //   console.log(a.current);
  //   alert(a.current);
  // },[count])
  
  const [togle,setTogle]=useState(false);
  


  return (
    <>
    <NavScrollExample/>
    <div style={{display:"flex", justifyContent: "space-around" , marginTop:"20px"}}>
   <BasicExample title="Java" description="Hello Some quick example text to build on the card title and make up the bulk of the card's content."/>
   <BasicExample title="Python" description="Python is a popular programming language. Python can be used on a server to create web applications."/>
   <BasicExample title="JavaScript" description="JavaScript is the world's most popular programming language.JavaScript is the programming language of the Web."/>
   <BasicExample title="React" description="Hello Some quick example text to build on the card title and make up the bulk of the card's content."/>
   </div>

   <button style={{margin:" 40px 40%"}} ref={a}  onClick={()=> setCount(count+1)}> Count value is {count}</button>
   <button style={{margin:" 40px 40%"}} onClick={()=> {a.current.style.display="none"}}>click me</button>
   {/* <div style={{height:"40px",width:"20px",backgroundColor:"yello" }} id='new'>Hello  i ma 20 </div> */}



   {togle?<button>togle true</button>:<button>togle false</button>}
   <button onClick={()=> setTogle(!togle)}>togle switcher</button>





   
   
   
   

   


      
    </>
  )
  
}

export default App
