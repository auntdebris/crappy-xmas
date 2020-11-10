import React, { useEffect } from "react";
import { ZoomMtg } from "@zoomus/websdk";

let apiKeys = {
    apiKey: process.env.REACT_APP_ZOOM_API_KEY,
    apiSecret: process.env.REACT_APP_ZOOM_API_SECRET_KEY,
};

let meetConfig = {
    apiKey: apiKeys.apiKey,
    leaveUrl: "https://zoom.us/",
    meetingNumber: "97140819337",
    userName: "Example",
    userEmail: "example@example.com",
    passWord: "0hZeCd",
    role: 0,
};

function ZoomMeeting() {
    function joinMeeting(signature, meetConfig) {
        ZoomMtg.init({
            leaveUrl: meetConfig.leaveUrl,
            isSupportAV: true,
            success: function (success) {
                console.log("Init Success ", success);
                ZoomMtg.join({
                    meetingNumber: meetConfig.meetingNumber,
                    userName: meetConfig.userName,
                    signature: signature,
                    apiKey: meetConfig.apiKey,
                    passWord: meetConfig.passWord,

                    success: (success) => {
                        console.log('init success', success);
                    },

                    error: (error) => {
                        console.log('init error', error);
                    },
                });
            },
        });
    }
    useEffect(() => {
        ZoomMtg.setZoomJSLib("https://source.zoom.us/1.8.1/lib", "/av");
        ZoomMtg.preLoadWasm();
        ZoomMtg.prepareJssdk();

        ZoomMtg.generateSignature({
            meetingNumber: meetConfig.meetingNumber,
            apiKey: meetConfig.apiKey,
            apiSecret: apiKeys.apiSecret,
            role: meetConfig.role,
            success: function (res) {
                console.log("res", res);

                setTimeout(() => {
                    joinMeeting(res.result, meetConfig);
                }, 1000);
            },
        });
    }, []);

    return <div className="ZoomMeeting">Zoom Testing</div>;
}

export default ZoomMeeting;
