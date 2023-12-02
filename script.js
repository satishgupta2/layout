let icon =document.querySelector(".icon");
let ul =document.querySelector(".nav-part2");

icon.addEventListener("click",() =>{
    ul.classList.toggle("showData");

    if(ul.className =="showData"){
        document.getElementById("bar").className ="ri-close-fill";
    }else{
        document.getElementById("bar").className ="ri-menu-line";
    }
})