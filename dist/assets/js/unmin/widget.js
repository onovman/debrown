const widget = document.querySelector(".widget");

const openWidget = document.querySelectorAll(".open-widget");
const closeWidget = document.querySelectorAll(".close-widget");


openWidget.forEach(open => {
    open.addEventListener("click", () => {
        widget.classList.toggle("active");
    });
});
closeWidget.forEach(close => {
    close.addEventListener("click", () => {
        widget.classList.toggle("active");
    });
});