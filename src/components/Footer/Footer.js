import React from "react";
import "./Footer.scss";

const Footer = () => {
  return (
    <section
      className="Footer"
      style={{
        backgroundImage: `url(${process.env.PUBLIC_URL}/assets/hero-bottom.jpg)`,
      }}
    >
      <div className="Footer__logoPS">
        <img
          className="-lazy"
          data-src={`${process.env.PUBLIC_URL}/assets/logo-ps.png`}
          alt="Publicis Sapient"
        />
      </div>
    </section>
  );
};

export default Footer;
