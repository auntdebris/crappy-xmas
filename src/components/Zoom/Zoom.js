import React from "react";
import classnames from "classnames";
import './Zoom.css';

// Loads web meeting in an iframe because
// Zoom SDK doesn't play well with others

const Zoom = ({ isOpen, setOpen }) => {
    const containerClass = classnames('Zoom', {
        open: isOpen
    });

    return (
        <div className={containerClass}>
            {isOpen && <iframe title="zoom" src="//ps-xmas-zoom.netlify.app"></iframe>}
            <button onClick={() => setOpen(false)}>Close X</button>
        </div>
    );
}

export default Zoom;
