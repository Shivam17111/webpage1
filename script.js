// var show = document.getElementById("show");
var menu = document.getElementById("menu");

var arr = ["Vastu", "Puja", "Astrology", "Gemstone", "Choghadiya", "Panchang", "Blog", "FAQ"];
arr.forEach(function (arr) {
    let option = document.createElement("option");
    option.text = arr;
    option.value = arr;
    menu.appendChild(option);
});

menu.onchange = function () {
    var selectedOption=this.value;
    if(selectedOption==="Vastu")
        window.location.href = "https://www.brahminji.com/product/vastu-consultant/";
    else if (selectedOption === "Puja")
        window.location.href = "https://www.brahminji.com/puja-service/";
    else if (selectedOption === "Astrology")
        window.location.href = "https://www.brahminji.com/astrology-reports/";
    else if (selectedOption === "Gemstone")
        window.location.href = "https://www.brahminji.com/gemstone-price-in-india/";
    else if (selectedOption === "Choghadiya")
        window.location.href = "https://www.brahminji.com/choghadiya/";
    else if (selectedOption === "Panchang")
        window.location.href = "https://www.brahminji.com/panchang/";
    else if (selectedOption === "Blog")
        window.location.href = "https://www.brahminji.com/blog/?swcfpc=1";
    else if (selectedOption === "FAQ")
        window.location.href = "https://www.brahminji.com/faq/";
}

// document.cookie = "user=shivam; SameSite=Strict";
document.cookie = "User=17111999; SameSite=None; Secure";
// console.log(document.cookie);
// console.log("apple123");

const carousel = document.querySelector(".carousel");
const wrapper = document.querySelector(".wrapper");
const arrowBtn = document.querySelectorAll(".wrapper i");
const firstcardWidth = carousel.querySelector(".card").offsetWidth;
const carouselChildrens =[...carousel.children];

let isDragging = false, startX, startScrollLeft, timeoutId;

let cardPerView = Math.round(carousel.offsetWidth / firstcardWidth)

// carouselChildrens.slice(-cardPerView).reverse().forEach(card => {
//     carousel.insertAdjacentHTML("afterbegin", card.outerHTML);
// });

// carouselChildrens.slice(0,cardPerView).forEach(card => {
//     carousel.insertAdjacentHTML("beforeend", card.outerHTML);
// });

arrowBtn.forEach(btn => {
    btn.addEventListener("click", () => {
        carousel.scrollLeft += btn.id === "left" ? -firstcardWidth:firstcardWidth;
    });
});

const dragStart = (e) => {
    isDragging = true;
    carousel.classList.add("dragging");
    startX = e.pageX;
    startScrollLeft = carousel.scrollLeft;
}

const dragging = (e) => {
    if(!isDragging) return;
    // console.log(e.pageX);
    carousel.scrollLeft = startScrollLeft - (e.pageX - startX);
}

const dragStop =() => {
    isDragging = false;
    carousel.classList.remove("dragging");
}

const autoPlay = () => {
    if(window.innerWidth <330) return;
    timeoutId = setTimeout(() => carousel.scrollLeft+=firstcardWidth, 2000);
}
autoPlay();

const infiniteScroll = () => {
    if(Math.ceil(carousel.scrollLeft) === 0) {
        console.log("left me aa gaya");
        carousel.classList.add("no-transition");
        carousel.scrollLeft=Math.ceil(carousel.scrollWidth - (2*carousel.offsetWidth));
        carousel.classList.remove("no-transition");
        
    } else if(Math.ceil(carousel.scrollLeft) === carousel.scrollWidth - carousel.offsetWidth) {
        console.log("You've reached to the right end");
        // console.log("right me aa gaya");
        carousel.classList.add("no-transition");
        carousel.scrollLeft=carousel.offsetWidth;
        carousel.classList.remove("no-transition");
    }

    clearTimeout(timeoutId);
    if(wrapper.matches(":hover")) autoPlay();
}

carousel.addEventListener("mousedown", dragStart);
carousel.addEventListener("mousemove", dragging);
document.addEventListener("mouseup", dragStop);
carousel.addEventListener("scroll", infiniteScroll);
wrapper.addEventListener("mouseleave", autoPlay);
wrapper.addEventListener("mouseenter", () => clearTimeout(timeoutId));

