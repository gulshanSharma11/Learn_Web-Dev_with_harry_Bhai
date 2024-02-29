let userDate=document.getElementById("date");
console.log(userDate.value);

userDate.max=new Date().toISOString().split( "T" )[0];  //get today's date and remove time part
 console.log(userDate.value);

 function calculateAge(){

 }
