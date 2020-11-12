import React from "react";
import './Quote.css';

const Quote = () => {
    return (
        <div className="Quote -fullbleed -centerContent" style={{
            backgroundImage: `url(${process.env.PUBLIC_URL}/images/decorations-green.png)`
        }}>
            <img src={`${process.env.PUBLIC_URL}/images/grinch-quote.png`} alt="Maybe Christmas, he thought" />
            <p className="-large">… doesn’t come from a store. Maybe christmas, perhaps…means a little bit more!</p>
        </div>
    );
}

export default Quote;
