var lazy = [].slice.call(document.querySelectorAll("img[data-src]"));
var lazyBackgrounds = [].slice.call(document.querySelectorAll(".lazy-background"));

if ("IntersectionObserver" in window && "IntersectionObserverEntry" in window && "intersectionRatio" in window.IntersectionObserverEntry.prototype) {
  let lazyBackgroundObserver = new IntersectionObserver(function(entries, observer) {
    entries.forEach(function(entry) {
      if (entry.isIntersecting) {
        entry.target.style = entry.target.dataset.bc;
        lazyBackgroundObserver.unobserve(entry.target);
      }
    });
  });

  lazyBackgrounds.forEach(function(lazyBackground) {
    lazyBackgroundObserver.observe(lazyBackground);
  });
}

if ("IntersectionObserver" in window && "IntersectionObserverEntry" in window && "intersectionRatio" in window.IntersectionObserverEntry.prototype) {
    let lazyObserver = new IntersectionObserver(function(entries, observer) {
        entries.forEach(function(entry) {
            if (entry.isIntersecting) {
                entry.target.setAttribute('src', entry.target.getAttribute('data-src'))
                lazyObserver.unobserve(entry.target);
            }
        });
    });
    
    lazy.forEach(function(img) {
        lazyObserver.observe(img);
    });
}