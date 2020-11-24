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
      <img src={`${process.env.PUBLIC_URL}/assets/hero-text.png`} alt="" />
      <h1 className="-visuallyHidden">Not so Secret Santa</h1>
      <h2>
        Instead of spending a tenner on a tacky gift, why not use it to
        transform lives.
      </h2>
      <img
        className="scrollIndicator"
        src={`${process.env.PUBLIC_URL}/assets/scroll-indicator.png`}
        alt=""
        role="presentation"
      />
    </section>
  );
};

export default Hero;
