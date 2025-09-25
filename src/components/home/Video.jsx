import React, { useState } from "react";

const Video = () => {
  const [error, setError] = useState(false);

  return (
    <div className="h-full w-full">
      {!error ? (
        <video
          className="h-full w-full object-cover"
          autoPlay
          loop
          muted
          playsInline
          controls={false}   // hide controls
          src="/video.mp4"   // keep video.mp4 in public/ folder
          onError={() => setError(true)}
        />
      ) : (
        <div className="h-full w-full">
          <iframe
            width="100%"
            height="100%"
            style={{ border: 0 }}
            scrolling="no"
            src="https://go.screenpal.com/player/cTQTl8nDrts?width=100%&height=100%&ff=1&title=0&controls=0&a=1&m=1"
            allowFullScreen
          ></iframe>
        </div>
      )}
    </div>
  );
};

export default Video;
