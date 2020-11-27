import React from "react";
import "./Hero.scss";

const animateScroll = (targetPos, duration) => {
  const documentBodyElement = document.scrollingElement || document.body;
  const startPos = documentBodyElement.scrollTop;
  const posDelta = targetPos - startPos;
  // Assumes 60 frames per second
  const totalFrames = duration * 0.06;

  // Robert Penner's easeOutCubic function
  const easeOutCubic = (currentFrame) => {
    return (
      posDelta * (Math.pow(currentFrame / totalFrames - 1, 3) + 1) + startPos
    );
  };

  const handleAnimationFrame = (currentFrame) => {
    if (currentFrame > totalFrames) {
      return;
    }

    window.requestAnimationFrame(() => {
      documentBodyElement.scrollTop = easeOutCubic(currentFrame);
      handleAnimationFrame(currentFrame + 1);
    });
  };

  handleAnimationFrame(0);
};

const Hero = () => {
  const onImageLoad = (e) => {
    e.target.parentNode.parentNode.classList.add("-loaded");
  };

  return (
    <section
      className="Hero -fullbleed -centerContent"
      style={{
        backgroundImage: `url(${process.env.PUBLIC_URL}/assets/hero.jpg)`,
      }}
    >
      <div>
        <img
          src={`${process.env.PUBLIC_URL}/assets/hero.jpg`}
          className="-visuallyHidden"
          alt=""
          role="presentation"
          onLoad={onImageLoad}
        />
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
