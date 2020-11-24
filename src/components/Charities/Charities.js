import React from "react";
import "./Charities.scss";
import charities from "./data";

const Charity = ({ id, name = "", text = "", url = "" }) => (
  <article>
    <section>
      <p>{text}</p>
      <a href={url} className="button -red">
        Donate
      </a>
    </section>
    <section>
      <img src={`${process.env.PUBLIC_URL}/images/logo-${id}.png`} alt={name} />
      <p className="-large">{name}</p>
    </section>
  </article>
);

const Charities = () => (
  <section className="Charities -fullbleed -centerContent">
    {Array.isArray(charities) && (
      <ul>
        {charities.map((charity) => (
          <Charity key={charity.id} {...charity} />
        ))}
      </ul>
    )}
  </section>
);

export default Charities;
