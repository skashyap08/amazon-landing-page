window.addEventListener("load", () => {
    const loader = document.getElementById("loader");

    setTimeout(() => {
        loader.style.opacity = "0";
        loader.style.visibility = "hidden";
    }, 1200);
});
const hero = document.querySelector(".hero");

const heroImages = [
    "images/hero1.jpg",
    "images/hero2.jpg",
    "images/hero3.jpg"
];
let currentHero = 0;

function changeHero(){

    currentHero++;

    if(currentHero >= heroImages.length){
        currentHero = 0;
    }

    hero.style.backgroundImage =
        `url(${heroImages[currentHero]})`;

}

setInterval(changeHero,5000);
const items = document.querySelectorAll(".item");

items.forEach(item=>{

    item.querySelector("h3").addEventListener("click",()=>{

        item.classList.toggle("active");

    });

});
const topBtn=document.getElementById("top");

window.addEventListener("scroll",()=>{

    if(window.scrollY>500){

        topBtn.style.display="block";

    }

    else{

        topBtn.style.display="none";

    }

});