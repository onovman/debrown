function initOzslider(obj, out = false, fun = false){
    
    const slider = document.querySelector(obj.slider);
    const sliderTrack = document.querySelector(obj.sliderTrack);
    const nextBtn = document.querySelector(obj.nextBtn);
    const prevBtn = document.querySelector(obj.prevBtn);
    const slides = document.querySelectorAll(obj.slide);

    let count = 0;
    let width;
    let currentCount;
    let totalCount;
    let functionOnRoll;

    if(out === true){
        currentCount = document.querySelector(obj.current);
        totalCount = document.querySelector(obj.total);

        currentCount.innerHTML = `0${count + 1}`;
        totalCount.innerHTML = "0" + slides.length;
    }
    if(fun === true){
        functionOnRoll = obj.fun;
    }

    sliderTrack.style.position = `relative`;
    sliderTrack.style.left = `0`;

    function start(){
        width = slider.offsetWidth;
        sliderTrack.style.width = width * slides.lenght;

        slides.forEach(i => {
            i.style.width = width + 'px';
            i.style.height = 'auto';
        });

        roll();
    };
    function next(){
        count++;

        if(count >= slides.length){
            count = 0;
        };

        roll();
    };
    function prev(){
        count--;

        if(count < 0){
            count = slides.length - 1;
        };

        roll();
    };

    function roll(){
        sliderTrack.style.left = `-${count * width}px`;

        if(out === true){
            currentCount.innerHTML = `0${count + 1}`;;
        }
        if(fun === true){
            functionOnRoll();
        }
    };

    slider.addEventListener('touchstart', handleTouchStart);
    slider.addEventListener('touchmove', handleTouchMove);
    slider.addEventListener('touchend', handleTouchEnd);

    let xDown = null;                                                        
    let yDown = null;     
    let xDiff = null;
    let yDiff = null;                                                   

    function handleTouchStart(evt) {                                         
        xDown = evt.touches[0].clientX;                                      
        yDown = evt.touches[0].clientY;                                   
    };                                                

    function handleTouchMove(evt){
        if(!xDown || !yDown){
            return;
        }

        let xUp = evt.touches[0].clientX;                                    
        let yUp = evt.touches[0].clientY;

        xDiff = xDown - xUp;
        yDiff = yDown - yUp;                                                             
    }

    function handleTouchEnd(){
        if(Math.abs(xDiff) > Math.abs(yDiff)){
            if(xDiff > 100){
                next();
            }
            else if(xDiff < -100){
                prev();
            }
        }
    }
    
    xDown = null;
    yDown = null;                                             


    window.addEventListener("resize", start);
    nextBtn.addEventListener("click", next);
    prevBtn.addEventListener("click", prev);

    start();
};

