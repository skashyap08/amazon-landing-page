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
topBtn.addEventListener("click",()=>{

window.scrollTo({

top:0,

behavior:"smooth"

});

});
document.querySelectorAll("nav a").forEach(anchor=>{

anchor.addEventListener("click",function(e){

e.preventDefault();

const target=document.querySelector(

this.getAttribute("href")

);

if(target){

target.scrollIntoView({

behavior:"smooth"

});

}

});

});
const cards=document.querySelectorAll(".card");

cards.forEach(card=>{

card.addEventListener("mouseenter",()=>{

card.style.transform="scale(1.05)";

});
card.addEventListener("mouseleave",()=>{

card.style.transform="scale(1)";

});

});
const reveals=document.querySelectorAll(

".section,.membership,.devices,.faq"

);

function reveal(){

reveals.forEach(sec=>{

const windowHeight=window.innerHeight;

const revealTop=sec.getBoundingClientRect().top;

const revealPoint=120;

if(revealTop<windowHeight-revealPoint){

sec.classList.add("active");

}

});
}
window.addEventListener("scroll",reveal);

reveal();

const style=document.createElement("style");

style.innerHTML=`

.section,

.membership,

.devices,

.faq{

opacity:0;

transform:translateY(60px);

transition:1s;

}