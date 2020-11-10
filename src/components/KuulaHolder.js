import React, { useEffect } from "react";


function KuulaHolder() {

    useEffect(() => {
        console.log('Kuula holder');
    }, []);

    return <div className="KuulaHolder">Hello I'm Kuula!</div>;
}

export default KuulaHolder;
