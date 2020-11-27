import React from "react";
import "./Charity.scss";

const Charity = ({ id, name, alt, text, url }) => (
  <article className="Charity -lazy">
    <section>
      <p className="-medium">{text}</p>
      <div>
        <a href={url} className="button -red">
          Donate now
        </a>
      </div>
    </section>
    <section>
      <div className="logo">
        <img
          className="-lazy"
          data-src={`${process.env.PUBLIC_URL}/assets/logo-${id}.png`}
          alt={name}
        />
      </div>
      <img
        className="-lazy img"
        data-src={`${process.env.PUBLIC_URL}/assets/img-${id}.jpg`}
        alt={alt}
      />
    </section>
  </article>
);

export default Charity;
