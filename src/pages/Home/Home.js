import React, { useEffect } from "react";
import "./Home.scss";
import Hero from "../../components/Hero";
import Intro from "../../components/Intro";
import Charities from "../../components/Charities/Charities";
import Party from "../../components/Party/Party";

export const lazyloading = () => {
  const THRESHOLD = 0.2;
  let observer = {};
  let imgObserver = {};

  const config = {
    rootMargin: "50px 0px",
    threshold: THRESHOLD,
  };

  const imgConfig = {
    rootMargin: `${window.innerHeight}px 0px`,
    threshold: 0,
  };

  const onChange = (changes) => {
    changes.forEach((change) => {
      if (change.intersectionRatio > 0) {
        change.target.classList.add("-visible");

        // stop observing the current target
        observer.unobserve(change.target);
      }
    });
  };

  const onImgChange = (changes) => {
    changes.forEach((change) => {
      if (change.intersectionRatio > 0) {
        change.target.classList.add("-visible");
        change.target.src = change.target.getAttribute("data-src");

        // stop observing the current target
        observer.unobserve(change.target);
      }
    });
  };

  if ("IntersectionObserver" in window) {
    // create observer
    observer = new IntersectionObserver(onChange, config);
    imgObserver = new IntersectionObserver(onImgChange, imgConfig);

    // convert node list to array
    const imgElems = [...document.querySelectorAll("img.-lazy")];
    const elems = [...document.querySelectorAll(".-lazy")];

    // observe each image
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
  }
  return true;
};

const Home = () => {
  useEffect(() => {
    setTimeout(() => {
      window.scrollTo(0, 0);
    }, 70);
    lazyloading();
  }, []);

  return (
    <div className="Home -fullbleed">
      <Hero />
      <Intro />
      <Charities />
      <Party />
    </div>
  );
};

export default Home;
