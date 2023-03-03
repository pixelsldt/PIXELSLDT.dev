const ham = document.querySelector(".ham")
const ul = document.querySelector(".ul")
const nav = document.querySelector("nav")

ham.addEventListener("click",()=>{
    ul.classList.toggle("openclose")
   ham.classList.toggle("lines")
  
})
const activePage = window.location.pathname;
const navLinks = document.querySelectorAll("nav a").forEach(link => {
    if(link.href.includes(`${activePage}`)){
      link.classList.add('styleNav');
      console.log(link);
    }
  })