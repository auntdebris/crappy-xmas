import React from "react";
import './Charities.css';

const Charities = () => {
    return (
        <section className="Charities -fullbleed -centerContent">
            <ul>
                <li>
                    <article>
                        <img src={`${process.env.PUBLIC_URL}/images/logo-crisis.png`} alt="Crisis" />
                        <p className="-large">Crisis</p>
                        <a href="/" className="button -red">Donate</a>
                    </article>
                </li>
                <li>
                    <article>
                        <img src={`${process.env.PUBLIC_URL}/images/logo-firstlove.png`} alt="Crisis" />
                        <p className="-large">First Love Foundation</p>
                        <a href="/" className="button -red">Donate</a>
                    </article>
                </li>
                <li>
                    <article>
                        <img src={`${process.env.PUBLIC_URL}/images/logo-mind.png`} alt="Crisis" />
                        <p className="-large">MIND</p>
                        <a href="/" className="button -red">Donate</a>
                    </article>
                </li>
                <li>
                    <article>
                        <img src={`${process.env.PUBLIC_URL}/images/logo-wlt.png`} alt="Crisis" />
                        <p className="-large">World Land Trust</p>
                        <a href="/" className="button -red">Donate</a>
                    </article>
                </li>
                <li>
                    <article>
                        <img src={`${process.env.PUBLIC_URL}/images/logo-wme.png`} alt="Crisis" />
                        <p className="-large">#WeMakeEvents</p>
                        <a href="/" className="button -red">Donate</a>
                    </article>
                </li>
            </ul>
        </section>
    );
}

export default Charities;
