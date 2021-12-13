import React from "react";

export const Main_StreamsOn = ({streamInfo, changeVisibility, streamSelected, setStreamerSelected}) => {
  return (
    <div className="stream-container">
      <div className="stream" 
           onClick = { ()=>{
             changeVisibility(!streamSelected);
             setStreamerSelected(streamInfo);
            } }
      >
        <img src={streamInfo.img} alt={streamInfo.altImgStream}/>
        <span className="tag-on">EN VIVO</span>
        <span className="tag-spectators">{`${streamInfo.spectators} espectadores`}</span>
      </div>
      <div className="stream-info">
        <div className="streamer-image">
            <img src={streamInfo.imgStreamer} alt={streamInfo.altImgLogo}/>
        </div>

        <h1 className="stream-title">
          {streamInfo.title}
        </h1>

        <div className="streamer-name">{streamInfo.username}</div>

        <div className="streamer-languajes">
            {
                streamInfo.languajes.map((element,index)=>(
                    <span key={index}>{element}</span>
                ))
            }
        </div>
      </div>
    </div>
  );
};
