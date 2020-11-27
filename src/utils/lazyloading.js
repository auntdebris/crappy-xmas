const lazyloading = () => {
  const lazyClass = "-lazy";
  const visibleClass = "-visible";

  const imgElems = [...document.querySelectorAll(`img.${lazyClass}`)];
  const elems = [...document.querySelectorAll(`.${lazyClass}`)];

  let observer = {};
  let imgObserver = {};

  const config = {
    rootMargin: "50px 0px",
    threshold: 0.2,
  };

  const imgConfig = {
    rootMargin: `${window.innerHeight}px 0px`,
    threshold: 0,
  };

  const onElemChange = (changes) => {
    changes.forEach((change) => {
      if (change.intersectionRatio > 0) {
        change.target.classList.add(visibleClass);
        observer.unobserve(change.target);
      }
    });
  };

  const onImgChange = (changes) => {
    changes.forEach((change) => {
      if (change.intersectionRatio > 0) {
        change.target.classList.add(visibleClass);
        change.target.src = change.target.getAttribute("data-src");
        imgObserver.unobserve(change.target);
      }
    });
  };

  if ("IntersectionObserver" in window) {
    observer = new IntersectionObserver(onElemChange, config);
    imgObserver = new IntersectionObserver(onImgChange, imgConfig);

    elems.forEach((elem) => {
      if (elem.getBoundingClientRect().top < 0) {
        elem.classList.add("-visible");
      } else {
        observer.observe(elem);
      }
    });

    imgElems.forEach((imgElem) => {
      if (imgElem.getBoundingClientRect().top < 0) {
        imgElem.src = imgElem.getAttribute("data-src");
      } else {
        imgObserver.observe(imgElem);
      }
    });
  } else {
    elems.forEach((elem) => {
      elem.classList.add("-visible");
    });

    imgElems.forEach((imgElem) => {
      imgElem.classList.add("-visible");
      imgElem.src = imgElem.getAttribute("data-src");
    });
  }
  return true;
};

export default lazyloading;
