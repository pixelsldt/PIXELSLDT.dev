const ham = document.querySelector(".ham")
const ul = document.querySelector(".ul")
const nav = document.querySelector("nav")

ham.addEventListener("click",()=>{
    ul.classList.toggle("openclose")
   ham.classList.toggle("lines")
  
})
