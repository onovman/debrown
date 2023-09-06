const currentCount = document.querySelector(".main-slider__current");
const totalCount = document.querySelector(".main-slider__total");

let range = document.querySelector(".main-slider__range-fill");

initOzslider({
    slider: '.main-slider__real',
    slide: '.main-slider__slide',
    sliderTrack: '.main-slider__track',
    nextBtn: '.main-slider__next',
    prevBtn: '.prev',
    current: '.main-slider__current',
    total: '.main-slider__total',
    fun: () => {
        range.style.width = 100 / (parseInt(totalCount.innerHTML) / parseInt(currentCount.innerHTML))  + '%';
    }
}, true, true);

initOzslider({
    slider: '.feed-real-slider',
    slide: '.feed-slider__slide',
    sliderTrack: '.feed-slider__track',
    nextBtn: '.feed-next',
    prevBtn: '.feed-prev'
});