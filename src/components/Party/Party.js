import React from "react";
import "./Party.scss";

const Party = () => {
  return (
    <section
      className="Party"
      style={{
        backgroundImage: `url(${process.env.PUBLIC_URL}/assets/hero-bottom.jpg)`,
      }}
    >
      <div className="Party__logoPS -lazy">
        <img
          className="-lazy"
          data-src={`${process.env.PUBLIC_URL}/assets/logo-ps.png`}
          alt="Publicis Sapient"
        />
      </div>
      <img
        className="Party__invite -lazy"
        data-src={`${process.env.PUBLIC_URL}/assets/xmas-tag-tape.png`}
        alt="You're invited to our crappy Christmas Party. From: Scott"
      />
      <div className="Party__text -lazy">
        <div>
          <p className="-large">
            <strong>Not visited yet?</strong>
          </p>
          <p className="-large">
            Check out where the money we’d usually spend on our company
            Christmas party went and see for yourself the difference it’s making
            to people’s lives.
          </p>
        </div>
        <div>
          <a
            target="_blank"
            href="//crappychristmasparty.com"
            className="Party__cta button -lazy"
          >
            Take me to the party
          </a>
        </div>
      </div>
    </section>
  );
};

export default Party;
