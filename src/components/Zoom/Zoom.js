import React from "react";
import classnames from "classnames";
import './Zoom.css';

// Loads web meeting in an iframe because
// Zoom SDK doesn't play well with others

const Zoom = ({ isOpen, setOpen }) => {
    const containerClass = classnames('Zoom', {
        '-open': isOpen
    });

    return (
        <>
            <div className={`Zoom__overlay ${isOpen ? '-open' : ''}`} />
            <div className={containerClass}>
                {isOpen && <iframe title="zoom" src="/zoom-meeting"></iframe>}
                <button className="-plain" onClick={() => setOpen(false)}>Close ✕</button>
            </div>
        </>
    );
}

export default Zoom;
