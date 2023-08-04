function matchHeight(els){
    let getDivs = els;

    function matchme(){
        //Find out how my divs there are with the class 'match-height' 
        var arrayLength = getDivs.length;
        var heights = [];

        //Create a loop that iterates through the getDivs variable and pushes the heights of the divs into an empty array
        for (var i = 0; i < arrayLength; i++) {
            getDivs[i].style.height = "auto";
            heights.push(getDivs[i].offsetHeight);
        }

            //Find the largest of the divs
        function getHighest() {
            return Math.max(...heights);
        }

        //Set a variable equal to the tallest div
        var tallest = getHighest();

        //Iterate through getDivs and set all their height style equal to the tallest variable
        for (var i = 0; i < getDivs.length; i++) {
            getDivs[i].style.height = tallest + "px";
        }

    }

    var visible = function (target) {
        // Все позиции элемента
        var targetPosition = {
            top: window.pageYOffset + target.getBoundingClientRect().top,
            left: window.pageXOffset + target.getBoundingClientRect().left,
            right: window.pageXOffset + target.getBoundingClientRect().right,
            bottom: window.pageYOffset + target.getBoundingClientRect().bottom
          },
          // Получаем позиции окна
          windowPosition = {
            top: window.pageYOffset,
            left: window.pageXOffset,
            right: window.pageXOffset + document.documentElement.clientWidth,
            bottom: window.pageYOffset + document.documentElement.clientHeight
          };
      
        if (targetPosition.bottom > windowPosition.top && // Если позиция нижней части элемента больше позиции верхней чайти окна, то элемент виден сверху
          targetPosition.top < windowPosition.bottom && // Если позиция верхней части элемента меньше позиции нижней чайти окна, то элемент виден снизу
          targetPosition.right > windowPosition.left && // Если позиция правой стороны элемента больше позиции левой части окна, то элемент виден слева
          targetPosition.left < windowPosition.right) { // Если позиция левой стороны элемента меньше позиции правой чайти окна, то элемент виден справа
          return true;
        } else {
          return false;
        };
    };

    document.addEventListener("DOMContentLoaded", matchme);
    document.addEventListener("scroll", () => {
        if(visible(getDivs[0])){
            matchme();
        }
    });
    
    window.addEventListener("resize", matchme);
}