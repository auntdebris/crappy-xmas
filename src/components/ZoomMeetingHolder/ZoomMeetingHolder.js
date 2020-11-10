import React from "react";
import classnames from "classnames";
import './ZoomMeetingHolder.css';

// Loads ZoomMeeting in an iframe to prevent Zoom from taking up the whole screen

const ZoomMeetingHolder = ({ isOpen, setOpen }) => {
    const containerClass = classnames('ZoomMeetingHolder', {
        open: isOpen
    });

    return (
        <div className={containerClass}>
            {isOpen && <iframe title="zoom-holder" src="/zoom-meeting"></iframe>}
            <button onClick={() => setOpen(false)}>Close X</button>
        </div>
    );
}

export default ZoomMeetingHolder;
