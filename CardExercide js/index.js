function card (text1,text2,views,date){
let viewss

    if(1000>views<100000){
               viewss=views/1000+"k";
    }
    else if(views<1000){
        viewss=views;
    }else{
        viewss=views/1000000+"M";
    }
    let html=`<div class="main">
    <div class="image">
        <img src="./download.webp" alt="">
    </div>
    <div class="text">
        <p>${text1}</p>
        <p>${text2} . ${viewss} views . ${date} months</p>
    </div>
</div>`
document.querySelector(".container").innerHTML=document.querySelector(".container").innerHTML+html;
}

card("Basic Structure of an HTML Website | Sigma Web Development Course - Tutorial #3","CodeWithHarry","45000000","4");
card("Basic Structure of an HTML Website | Sigma Web Development Course - Tutorial #3","CodeWithHarry","4500000","4");
card("Basic Structure of an HTML Website | Sigma Web Development Course - Tutorial #3","CodeWithHarry","450","4");

