const menubtns = document.getElementById("menu-btn");
const navlinks= document.getElementById("nav-links");
const menuBtnIcon = menubtns.querySelector("i");

menubtns.addEventListener("click", (e)=>{
    navlinks.classList.toggle("open");

    const isopen = navlinks.classList.contains("open");
    menuBtnIcon.setAtrribute("class", isopen?"ri-close-line":"ri-menu-line");
})

navlinks.addEventListener("click", (e)=>{
    navlinks.classList.remove("open");

    menuBtnIcon.setAttribute("class", "ri-menu-line");
})