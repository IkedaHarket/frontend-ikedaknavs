addEventListener("scroll",()=>{
    if(scrollY > 0){
        document.querySelector(".header").classList.add("header-fixed");
    }
    if(scrollY == 0){
        document.querySelector(".header").classList.remove("header-fixed");
    }
});
let menuOpen = document.querySelector(".header__open");
let menuClose = document.querySelector(".header__close");

menuOpen.addEventListener("click",()=>{
    document.querySelector(".navOcul").classList.toggle("navOcul-open");
    menuOpen.style.display = "none";
    menuClose.style.display= "inline";
});

menuClose.addEventListener("click",()=>{
    document.querySelector(".navOcul").classList.toggle("navOcul-open");
    menuClose.style.display = "none";
    menuOpen.style.display= "inline";
});

