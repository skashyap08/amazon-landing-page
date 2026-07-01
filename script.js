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
