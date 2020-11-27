import React from "react";
import "./Hero.scss";
import animateScroll from "../../utils/animateScroll";

const Hero = () => {
  const onImageLoad = (e) => {
    e.target.parentNode.parentNode.classList.add("-loaded");
  };

  return (
    <section className="Hero">
      <div
        className="Hero__bg"
        style={{
          backgroundImage: `url(${process.env.PUBLIC_URL}/assets/hero.jpg)`,
        }}
      >
        <img
          src={`${process.env.PUBLIC_URL}/assets/hero.jpg`}
          className="-visuallyHidden"
          alt=""
          role="presentation"
          onLoad={onImageLoad}
        />
      </div>
      <div className="Hero__content">
        <img
          className="Hero__logo -landscape"
          src={`${process.env.PUBLIC_URL}/assets/hero-landscape.png`}
          alt=""
        />
        <img
          className="Hero__logo -portrait"
          src={`${process.env.PUBLIC_URL}/assets/hero-portrait.png`}
          alt=""
        />
        <h1 className="-visuallyHidden">Not so Secret Santa</h1>
        <h2 className="Hero__text">
          Instead of spending a tenner on a tacky gift, why not use it to
          transform lives.
        </h2>
        <button
          className="Hero__scrollIndicator"
          onClick={() => animateScroll(window.innerHeight, 750)}
        >
          <img
            src={`${process.env.PUBLIC_URL}/assets/scroll-indicator.png`}
            alt=""
            role="presentation"
          />
          <span className="-visuallyHidden">Scroll down</span>
        </button>
      </div>
    </section>
  );
};

export default Hero;
