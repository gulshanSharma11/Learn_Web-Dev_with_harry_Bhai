const inputBox=document.getElementById("input-box");
const listContainer=document.getElementById("list-container");
function addTask(){
    if(inputBox.value===""){
alert("Please enter a task!");
    }else{
        let li=document.createElement("li");
        li.innerHTML=inputBox.value;
        listContainer.appendChild(li);
        let span=document.createElement("span");
        span.innerHTML=("\u00D7");
        li.appendChild(span);
    }
    inputBox.value="";
    showData();
}
listContainer.addEventListener( "click", function(e){
    if(e.target.tagName=="LI"){
        e.target.classList.toggle("checked");
        showData();
    }else if(e.target.tagName==="SPAN"){
        e.target.parentElement.remove();  
        showData();
    }
},false);

function showData(){
    localStorage.setItem("data", listContainer.innerHTML);

}
function ShowTask(){
    listContainer.innerHTML=localStorage.getItem("data");
}
ShowTask();
