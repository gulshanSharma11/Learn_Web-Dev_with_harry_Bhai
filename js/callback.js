// function sum (a,b){
//    console.log(a+b)
// }


// function calc(a,b,sum){
//     sum(a,b)
// }
// //  calc(1,4,sum)    // ase bhi kr sakte hai or niche  wale tarike se bhi

// calc(1,8,  (a,b)=>{
//       console.log(a+b)
// })




// const hello= ()=>{
//     console.log("Hai  Bajrang Bali")
// }
// setTimeout(hello, 3000); 

// setTimeout(()=>{
//     calc(1,8,sum)
// }, 5000);



// function sum(a,b){
//     console.log( a + b)
// }
// function total( ){
//     console.log(1+3, ()=>{
//         console.log(total());
//     });
// }
// sum(1,8);
// total();



function hell(BigData , SmallData){
    setTimeout(()=>{
        console.log("data", BigData);
        if(SmallData){
            SmallData();
        }
        
    },2000);
}

hell(1,()=>{
    hell(2, ()=>{
        hell(3)
    })
});