import React from "react";

export const StreamerOnNavbar = ({
  streamInfo,
  category,
  showDetails,
  setStreamSelected,
  setStreamerSelected,
}) => {
  return (
    <div
      className={`item-streamer ${!showDetails && "hide"}`}
      onClick={() => {
        setStreamSelected(true);
        setStreamerSelected(streamInfo);
      }}
    >
      <img src={streamInfo.imgStreamer} />
      {showDetails && (
        <>
          <div className="streamer-name">
            <h4 className="name">{streamInfo.username}</h4>
            <h4 className="category">{category}</h4>
          </div>
          <div className="streamer-viewers">
            <div className="circle-on"></div>
            <h4>{streamInfo.spectators}</h4>
          </div>
        </>
      )}
    </div>
  );
};
