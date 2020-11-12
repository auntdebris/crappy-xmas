import React from "react";
import Hero from "../../components/Hero";
import Intro from "../../components/Intro";
import Charities from "../../components/Charities/Charities";
import Quote from "../../components/Quote";
import Party from "../../components/Party";
import './Home.css';

const Home = () => {
    return (
        <div className="Home -fullbleed">
            <Hero />
            <Intro />
            <Charities />
            <Quote />
            <Party />
        </div>
    )
};

export default Home;
