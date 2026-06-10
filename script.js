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

let instagram = document.querySelector(".instagram")
let linkedin = document.querySelector(".linkedin")
let github = document.querySelector(".github")
instagram.addEventListener("click", function(){
    window.open("https://www.instagram.com/am_thakurnaman_00118?igsh=c3VzcHl3N3A3d2th&utm_source=qr")
})

linkedin.addEventListener("click", function(){
    window.open("https://www.linkedin.com/in/naman-singh-chauhan-9702461b2/")
})

github.addEventListener("click", function(){
    window.open("https://github.com/Naman8859")
})