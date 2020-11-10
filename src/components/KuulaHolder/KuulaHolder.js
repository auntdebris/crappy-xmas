import React, { useEffect } from "react";
import './KuulaHolder.css';

const KuulaHolder = () => {

    useEffect(() => {
        console.log('Kuula holder');
    }, []);

    return (
        <div className="KuulaHolder">
            <iframe title="kuula-holder" src="https://kuula.co/share/7lQ73?fs=1&vr=0&thumbs=1&alpha=0.60&hideinst=1&chromeless=0&logo=0" />
        </div>
    );
}

export default KuulaHolder;
