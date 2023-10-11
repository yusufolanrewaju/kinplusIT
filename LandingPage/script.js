function disableScroll() {
    document.body.classList.add("stop-scrolling");
    document.querySelector(".nav").style.position = "fixed";
    document.querySelector(".nav").style.top = "0";
    document.querySelector(".nav").style.width = "100%";
    document.querySelector(".head").style.margin = `100px 0 0 0` ;
}

function enableScroll() {
    document.body.classList.remove("stop-scrolling");
    document.querySelector(".nav").style.position = "sticky";
    document.querySelector(".nav").style.top = "0";
    document.querySelector(".nav").style.width = "100%";
    document.querySelector(".head").style.margin = "0";
}

function stop(){
    if(document.getElementById("menu").checked){
        disableScroll();
    }
    else{
        enableScroll();
    }
}


// $ (document).ready (function(){
//     $("input").click(function(){
//         $(".head").toggle(10);
//     });
// });