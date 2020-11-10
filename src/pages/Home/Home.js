import React, { useState } from "react";
import KuulaHolder from "../../components/KuulaHolder";
import ZoomMeetingHolder from "../../components/ZoomMeetingHolder";
import './Home.css';

const Home = () => {
    const [isZoomModalOpen, setZoomModalOpen] = useState(false);

    return (
        <div className="Home">
            <KuulaHolder />

            <header>
                <h1>Crappy Christmas</h1>
            </header>

            <div className="Home__controls">
                <button onClick={() => setZoomModalOpen(true)}>Open zoom meeting</button>
            </div>

            <ZoomMeetingHolder isOpen={isZoomModalOpen} setOpen={setZoomModalOpen} />
        </div>
    )
};

export default Home;
