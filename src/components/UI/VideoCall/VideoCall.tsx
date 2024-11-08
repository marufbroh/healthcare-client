"use client"

import AgoraUIKit from "agora-react-uikit";
import { useState } from "react";

const VideoCall = ({ videoCallingId }: { videoCallingId: string }) => {
  const [startVideoCall, setStartVideoCall] = useState(true);

  const rtcProps = {
    appId: process.env.NEXT_PUBLIC_VIDEO_CALL_APP_ID || "test",
    channel: videoCallingId, // your agora channel
    token: null, // use null or skip if using app in testing mode
  };

  const callbacks = {
    EndCall: () => setStartVideoCall(false),
  };

  return startVideoCall ? (
    <div style={{ display: "flex", width: "100vw", height: "100vh" }}>
      <AgoraUIKit rtcProps={rtcProps} callbacks={callbacks} />
    </div>
  ) : (
    <h3 onClick={() => setStartVideoCall(true)}>Start Call</h3>
  );
};

export default VideoCall;