let toastDisplayBox=document.getElementById("toastBox");
let successmsg= "Successfully Submitted";
let errormsg="Error";
let invalidmsg="Invalid Input! Please Enter Valid Data.";

function showtoast(msg){

    
   let toast= document.createElement('div');
    toast.classList.add("toast");
    toast.innerHTML=msg;
    toastDisplayBox.appendChild(toast);
    }
    
    
