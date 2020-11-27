import React from "react";
import "./Hero.scss";

const Hero = () => {
  return (
    <section
      className="Hero -fullbleed -centerContent"
      style={{
        backgroundImage: `url(${process.env.PUBLIC_URL}/assets/hero.jpg)`,
      }}
    >
      <div>
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
        <img
          className="Hero__scrollIndicator"
          src={`${process.env.PUBLIC_URL}/assets/scroll-indicator.png`}
          alt=""
          role="presentation"
        />
      </div>
    </section>
  );
};

export default Hero;
