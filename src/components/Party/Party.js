import React, { useState } from "react";
import './Party.css';
import Kuula from "../Kuula";
import Zoom from "../Zoom";

const PartyControls = ({ setZoomModalOpen }) => {
    return (
        <div className="Party__controls">
            <button onClick={() => setZoomModalOpen(true)}>Enter Zoom Party</button>
        </div>
    );
}

const Party = () => {
    const [isZoomModalOpen, setZoomModalOpen] = useState(false);

    return (
        <section className="Party -fullbleed">
            <Kuula />
            <PartyControls setZoomModalOpen={setZoomModalOpen} />
            <Zoom isOpen={isZoomModalOpen} setOpen={setZoomModalOpen} />
        </section>
    );
}

export default Party;
