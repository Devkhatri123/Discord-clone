let menu_bars = document.querySelector("#menu_bars")
let onclick_Nav = document.querySelector(".onclick_Nav");
let close_icon = document.querySelector(".close_icon")
menu_bars.addEventListener("click",function(e){
   let active_bar= menu_bars.classList.toggle("active");
   let active_nav= onclick_Nav.classList.toggle("active");
    console.log("clicked")
    console.log(e.target.id)
})
close_icon.addEventListener("click",function(e){
    
    menu_bars.classList.remove("active");
    onclick_Nav.classList.remove("active");
    console.log("again clicked")
    console.log(e.target.id)
})
document.addEventListener("click",function(e){
    if(!menu_bars.contains(e.target) && !onclick_Nav.contains(e.target)){
    menu_bars.classList.remove("active");
    onclick_Nav.classList.remove("active");
    }
    console.log(menu_bars.contains(e.target))
})
