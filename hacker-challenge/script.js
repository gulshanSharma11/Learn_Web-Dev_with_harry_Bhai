let dots = document.createElement("p");
dots.textContent="...";

function main(data1,data2){
    setTimeout(()=>{
              let html=`<h1>${data1}</h1>`;
               
              
              if(data2){
              data2(`<h1>${data2}</h1>`)
              }
              document.querySelector("body").innerHTML=document.querySelector("body").innerHTML+html;
    },2000);
}

main("Hello Everyone How Are U...",()=>{
    main("I am Hacking the terminal... ",()=>{
        main("Now your system is hacked>/",()=>{
            main("Good By");
        });
    });
});


