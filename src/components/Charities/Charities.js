import React from "react";
import "./Charities.scss";
import Charity from "../Charity";
import charities from "./data";

const Charities = () => (
  <section className="Charities -fullbleed -centerContent">
    {Array.isArray(charities) && (
      <ul>
        {charities.map((charity) => (
          <li key={charity.id}>
            <Charity {...charity} />
          </li>
        ))}
      </ul>
    )}
  </section>
);

export default Charities;
