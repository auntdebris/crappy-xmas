import React from "react";
import './Home.scss';
import Hero from "../../components/Hero";
import Intro from "../../components/Intro";
import Charities from "../../components/Charities/Charities";
import Party from "../../components/Party/Party";

const Home = () => {
    return (
        <div className="Home -fullbleed">
            <Hero />
            <Intro />
            <Charities />
            <Party />
        </div>
    )
};

export default Home;
