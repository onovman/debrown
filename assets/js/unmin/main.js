const exAutoHeight = document.querySelectorAll(".ex-auto");
const prodAutoHeight = document.querySelectorAll(".prod-auto");
const footerAutoHeight = document.querySelectorAll(".footer-auto");
const galleryOpen = document.querySelector(".gallery-active");
const galleryClose = document.querySelector(".gallery-hidden");
const gallery = document.querySelector(".gallery");


matchHeight(exAutoHeight);
matchHeight(prodAutoHeight);
matchHeight(footerAutoHeight);

let wow = new WOW({
    boxClass: 'wow',
    animateClass: 'animate__animated',
    offset: 0,
    mobile: true,
    live: true
}
);
wow.init();

galleryOpen.addEventListener("click", () => {
    if(!gallery.classList.contains("active")){
        gallery.classList.add("active");
    }
});
galleryClose.addEventListener("click", () => {
    if(gallery.classList.contains("active")){
        gallery.classList.remove("active");
    }
});
