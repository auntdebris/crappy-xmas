import React from "react";
import "./Party.scss";
// import Kuula from "../Kuula";

const Party = () => {
  return (
    <section
      className="Party -fullbleed"
      style={{
        backgroundImage: `url(${process.env.PUBLIC_URL}/assets/hero-bottom.jpg)`,
      }}
    >
      <div className="Party__content">
        <img
          className="Party__invite"
          src={`${process.env.PUBLIC_URL}/assets/xmas-tag.png`}
          alt="You're invited to our crappy Christmas Party. From: Scott"
        />
        <div className="Party__content-top">
          <div className="Party__logo">
            <img
              className="Party__logoImg"
              src={`${process.env.PUBLIC_URL}/assets/logo-ps.png`}
              alt="Publicis Sapient"
            />
          </div>
        </div>
        <div className="Party__content-bottom">
          <div className="Party__text">
            <p className="-large">
              <strong>Not visited yet?</strong>
            </p>
            <p className="-large">
              Check out where the money we’d usually spend on our company
              Christmas party went and see for yourself the difference it’s
              making to people’s lives.
            </p>
          </div>
          <div className="Party__cta">
            <a href="/" className="button -red">
              Take me to the party
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Party;
