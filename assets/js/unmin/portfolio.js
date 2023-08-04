const galleryOpen = document.querySelector(".gallery-active");
const galleryClose = document.querySelector(".gallery-hidden");
const gallery = document.querySelector(".gallery");

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
