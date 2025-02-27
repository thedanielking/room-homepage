const data = [
    {
        id: 1,
        title: "Discover innovative ways to decorate",
        desc: "Discover innovative ways to decorateWe provide unmatched quality, comfort, and style for property owners across the country. Our experts combine form and function in bringing your vision to life. Create a room in yourown style with our collection and make your property a reflection of you and what you love.",
        desktop: "./images/desktop-image-hero-1.jpg",
        mobile: "./images/mobile-image-hero-1.jpg"
    },
    {
        id: 2,
        imgsrc: "./images/desktop-image-hero-2.jpg",
        title: "We are available all across the globe",
        desc: "With stores all over the world, it's easy for you to find furniture for your home or place of business. Locally, we’re in most major cities throughout the country. Find the branch nearest you using our store locator. Any questions? Don't hesitate to contact us today.",
        desktop: "./images/desktop-image-hero-2.jpg",
        mobile: "./images/mobile-image-hero-2.jpg"
    },
    {
        id: 3,
        imgsrc: "./images/desktop-image-hero-3.jpg",
        title: "Manufactured with the best materials",
        desc: "Our modern furniture store provide a high level of quality. Our company has invested in advanced technology to ensure that every product is made as perfect and as consistent as possible. With three decades of experience in this industry, we understand what customers want for their home and office.",
        desktop: "./images/desktop-image-hero-3.jpg",
        mobile: "./images/mobile-image-hero-3.jpg"
    }
]


let slideIndex = 1;

function nextSlide(){
    let activeTitle = document.querySelector(".showcase__desc h1").textContent;

    if(slideIndex !== data.length){
        slideIndex++;
        updateSlide(slideIndex)
        
    }else if(slideIndex == data.length){
        slideIndex = 1;
        updateSlide(slideIndex)
    }
}

function previousSlide(){
    if(slideIndex !== 1){
        slideIndex--;
        updateSlide(slideIndex)
    }else if(slideIndex == 1){
        slideIndex = data.length;
        updateSlide(slideIndex) 
    }
}

const updateSlide = (slideIndex)=>{
    data.map((items, index)=>{
        if(slideIndex == items.id){
            let showcase = document.createElement("section");
        showcase.classList.add("showcase");
        showcase.innerHTML = `<div class="showcase__Image">
        <picture>
            <source media = "(max-width: 368px)" srcset=${items.mobile} class="mainImage">
            <img src=${items.desktop} alt="hero ${items.id}" class="desktopmainImage">
        </picture>
        <div class="sliderBtn">
            <div class="previous" onclick="previousSlide()">
                <img src="./images/icon-angle-left.svg" class="previousBtn" alt="previous">
            </div>
            <div class="next" onclick="nextSlide()">
                <img src="./images/icon-angle-right.svg" alt="next" class="nextBtn">
            </div>
        </div>
    </div>
    <div class="showcase__desc">
    <h1>${items.title}</h1>
    <p>${items.desc}</p>
    <button>
        <p>Shop Now</p>
        <img src="./images/icon-arrow.svg">
    </button>
    </div>`
    const arrayList = document.querySelectorAll(".showcase");
    document.querySelector("main").replaceChild(showcase, arrayList[0])
        }
    })
}

// keyboard arrow key
document.addEventListener('keydown', function (event) {
    if (event.key === 'ArrowLeft') {
      previousSlide();
    } else if (event.key === 'ArrowRight') {
      nextSlide();
    }
  });




// topnav
const nav = document.querySelector("nav");
const closeBtn = document.querySelector(".closeBtn")
const menuBtn = document.querySelector(".menuBtn")
const backdrop = document.querySelector("header div");

menuBtn.addEventListener("click", ()=>{
    nav.classList.add("topnav");
    backdrop.classList.add("backdrop")
})

closeBtn.addEventListener("click", ()=>{
    backdrop.classList.remove("backdrop")
    nav.classList.remove("topnav");
})

































