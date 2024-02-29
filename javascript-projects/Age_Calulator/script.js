let userDate=document.getElementById("date");
console.log(userDate.value);

userDate.max=new Date().toISOString().split( "T" )[0];  //get today's date and remove time part
 console.log(userDate.value);
 let data=document.getElementById("result");

 function calculateAge(){

    var birthDay = new Date(userDate.value);
    var today = new Date();
    
    
   let y1,d1,m1;

   y1=birthDay.getFullYear();
   
   d1=birthDay.getDate();
   m1=birthDay.getMonth()+1;


   let y2,m2,d2;

  y2=today.getFullYear();
  m2=today.getMonth()+1;
  d2=today.getDate();


  let m3,y3,d3;

  y3=y2-y1;

  if(m2>=m1){
    m3=m2-m1;
  }else{
    y3--;
    m3=12+m2-m1;
  }


  if(d2>=d1) {
    d3=d2-d1;
 }else{
   m3--;
   d3 = getDayInMonth(y1,m1)+d2-d1;
 }
 if(m3<0){
    m3=11;
    y3--;
 }
 console.log(y3,m3,d3);
 
 data.innerHTML=`Your age is ${y3} year ${m3} months and ${d3} days.`;
 userDate.value=null;
 dataq()
 }

 
 function getDayInMonth(year,month){
    return new Date(year, month ,0).getDate();
 }
 function dataq(){
    localStorage.setItem("data", data.innerHTML);
 }