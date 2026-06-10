let project1 = document.querySelector(".container1")
project1.addEventListener("click", function(){
    window.location.href = "./project1/index.html"
})

let navbarTitle = document.querySelector(".title")
let navbarName = document.querySelector(".name")
let navbarConnect = document.querySelector(".connect")
let hamburger = document.querySelector(".hamburger")

hamburger.addEventListener("click", function(){
    navbarTitle.classList.toggle("show-menu")
    navbarName.classList.toggle("show-menu")
    navbarConnect.classList.toggle("show-menu")
})