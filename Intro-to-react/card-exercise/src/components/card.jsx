import react from "react";
import { useState,useEffect } from "react";
import "./card.css"

function BasicExample() {
  const [cards,SetCard]=useState([]);

  const fetchData= async ()=>{
    let a= await fetch("https://jsonplaceholder.typicode.com/posts");
    let data=await a.json();
    SetCard(data);
    console.log(data);
  }
  useEffect(()=>{
    fetchData();
  })

  

  return (
    <>
    
    <div className="main">
        {cards.map((card)=>{
            return(<>
            
                <div className="box">
                    <img  src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ3ssjpTj_PtGoApUATjC0E8IyDjnJrOu1qvQ&usqp=CAU"></img>
                    <h1>{card.title}</h1><br />
                    <p >{card.body}</p>
                    <button onClick={()=>{location.reload();}} >{`card-No : ${card.id}`}</button>
                </div>
            
          </>
            )
        })}
        </div>
          
        

      {/* {sdata && Handel}
    <button onClick={ ()=> setData(!Handel())}>click me</button> */}
    </>
  );
}

export default BasicExample;


