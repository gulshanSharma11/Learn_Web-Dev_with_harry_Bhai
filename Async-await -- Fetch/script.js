// async function hello() {
//   let etch = await fetch("https://jsonplaceholder.typicode.com/todos/1");
//   let x = await etch.json()
//   console.log(x);
// }
// async function main() {
//   console.log("hello ji");
//   console.log("Kaise ho");

//   let data =  hello();
//   console.log(data);

//   console.log("Hello world");
// }
// main();



async function main () {
  return new Promise((resolve, reject)=>{
    setTimeout(()=>{
      resolve(455);
      },1000);
  });

}




async function home(){
  let b = await main();
  console.log(b);
}
home();