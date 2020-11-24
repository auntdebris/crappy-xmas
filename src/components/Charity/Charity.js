import React from "react";
import "./Charity.scss";

const Charity = ({ id, name, alt, text, url }) => (
  <article className="Charity">
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
          src={`${process.env.PUBLIC_URL}/assets/logo-${id}.png`}
          alt={name}
        />
      </div>
      <img
        className="img"
        src={`${process.env.PUBLIC_URL}/assets/img-${id}.jpg`}
        alt={alt}
        role="presentation"
      />
    </section>
  </article>
);

export default Charity;
