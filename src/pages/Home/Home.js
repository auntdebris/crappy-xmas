import React, { useEffect } from "react";
import "./Home.scss";
import Hero from "../../components/Hero";
import Intro from "../../components/Intro";
import Charities from "../../components/Charities";
import Party from "../../components/Party";
import Footer from "../../components/Footer";
import lazyloading from "../../utils/lazyloading";

const NoParty = () => <div />;

const Home = () => {
  const nowDate = Date.now();
  const partyDate = new Date(2020, 11, 10, 15, 30);

  const isPartyTime =
    window.location.search === "?party" || nowDate >= partyDate;

  useEffect(() => {
    setTimeout(() => {
      window.scrollTo(0, 0);
    }, 70);
    lazyloading();
  }, []);

  return (
    <div className="Home">
      <Hero />
      <Intro />
      <Charities />
      {isPartyTime ? <Party /> : <Footer />}
    </div>
  );
};

export default Home;
