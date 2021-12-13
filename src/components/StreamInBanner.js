import React from "react";
import {FaPlay} from 'react-icons/fa'
export const StreamInBanner = ({className, infoStream}) => {
  return (
    <div className={`video-stream-container ${className}`} >
      <div className="video-stream">
        <img src={infoStream.imgStreamView}/>
        <div>EN VIVO</div>
        <FaPlay />
      </div>

      <div className="chat-stream">
        <div className="first-section">
          <img className="img-profile" src={infoStream.imgStreamer}/>
          <div className="description-profile">
            <h1>{infoStream.username}</h1>
            <h3>{infoStream.category}</h3>
            <h4>{`${infoStream.spectators} espectadores`}</h4>
          </div>
        </div>

        <div className="second-section">
          <div className="languajes">
            {
              infoStream.languajes.map( (languaje, index) =>(
                <span key={index}>{languaje}</span>
              ) )
            }
          </div>
          <p>
            {infoStream.streamDescription}
          </p>
        </div>
      </div>
    </div>
  );
};
