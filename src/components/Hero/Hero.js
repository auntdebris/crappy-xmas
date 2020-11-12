import React from "react";
import './Hero.css';

const Hero = () => {

    return (
        <section className="Hero -fullbleed -centerContent">
            <h1>
                <img src={`${process.env.PUBLIC_URL}/images/hero.png`} alt="Not so Secret Santa" />
            </h1>
        </section>
    );
}

export default Hero;
