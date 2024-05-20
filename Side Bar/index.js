const realIcon = document.querySelector("#icon1");
const crossBtn = document.querySelector("#cross");
const clickNav = document.querySelector(".side");
const mainNav = document.querySelector(".side2");

realIcon.addEventListener("click",()=>{
    clickNav.style.display = "block";
    mainNav.style.display = "none";
    clickNav.classList.add("open")
});

crossBtn.addEventListener("click",()=>{
    mainNav.style.display = "block";
    clickNav.style.display = "none";
});
