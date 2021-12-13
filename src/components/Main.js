import React, { useEffect, useState } from "react";
import { Main_StreamsOn } from "./Main_StreamsOn";

import { streamer1, streamer2, streamer3, streamer4 } from "../data/streamers";

import "../styles/Main/Main.scss";
import { NavbarStreamers } from "./NavbarStreamers";
import { Banner } from "./Banner";
import { StreamView } from "./StreamView";
import { PopupVideoStream } from "./PopupVideoStream";
export const Main = ({ streamSelected, setStreamSelected }) => {
  const [windowWidth, setWindowWidth] = useState(null);
  const [streamerSelected, setstreamerSelected] = useState(null);
  const [popupVisibility, setPopupVisibility] = useState();

  useEffect(() => {
    const handleResize = () => {
      setWindowWidth(window.innerWidth);
    };

    window.addEventListener("resize", handleResize);

    handleResize();
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  return (
    <main className={streamSelected ? "stream-selected" : ""}>
      <NavbarStreamers
        setStreamSelected={setStreamSelected}
        setStreamerSelected={setstreamerSelected}
      />
      {popupVisibility === true && streamSelected === false && (
        <PopupVideoStream
          setPopupVisibility={setPopupVisibility}
          setStreamSelected={setStreamSelected}
          streamerInfo={streamerSelected}
        />
      )}

      {streamSelected ? (
        <StreamView
          streamerSelected={streamerSelected}
          setPopupVisibility={setPopupVisibility}
          setStreamSelected={setStreamSelected}
        />
      ) : (
        <>
          <Banner />
          <h1 className="h1-first">Canales en vivo que podrían gustarte</h1>
          <div className="streams-container first-container">
            <Main_StreamsOn
              setStreamerSelected={setstreamerSelected}
              streamInfo={streamer1}
              changeVisibility={setStreamSelected}
              streamSelected={streamSelected}
            />
            <Main_StreamsOn
              setStreamerSelected={setstreamerSelected}
              streamInfo={streamer2}
              changeVisibility={setStreamSelected}
              streamSelected={streamSelected}
            />
            {windowWidth >= 1024 && (
              <>
                <Main_StreamsOn
                  setStreamerSelected={setstreamerSelected}
                  streamInfo={streamer1}
                  changeVisibility={setStreamSelected}
                  streamSelected={streamSelected}
                />
                <Main_StreamsOn
                  setStreamerSelected={setstreamerSelected}
                  streamInfo={streamer2}
                  changeVisibility={setStreamSelected}
                  streamSelected={streamSelected}
                />
                <Main_StreamsOn
                  setStreamerSelected={setstreamerSelected}
                  streamInfo={streamer1}
                  changeVisibility={setStreamSelected}
                  streamSelected={streamSelected}
                />
                <Main_StreamsOn
                  setStreamerSelected={setstreamerSelected}
                  streamInfo={streamer2}
                  changeVisibility={setStreamSelected}
                  streamSelected={streamSelected}
                />
              </>
            )}
          </div>

          <hr></hr>

          <h1 className="h1-second">
            Canales recomendados de <a>League Of Legends</a>
          </h1>

          <div className="streams-container second-container">
            <Main_StreamsOn
              setStreamerSelected={setstreamerSelected}
              streamInfo={streamer3}
              changeVisibility={setStreamSelected}
              streamSelected={streamSelected}
            />
            <Main_StreamsOn
              setStreamerSelected={setstreamerSelected}
              streamInfo={streamer4}
              changeVisibility={setStreamSelected}
              streamSelected={streamSelected}
            />
            {windowWidth >= 1024 && (
              <>
                <Main_StreamsOn
                  setStreamerSelected={setstreamerSelected}
                  streamInfo={streamer3}
                  changeVisibility={setStreamSelected}
                  streamSelected={streamSelected}
                />
                <Main_StreamsOn
                  setStreamerSelected={setstreamerSelected}
                  streamInfo={streamer4}
                  changeVisibility={setStreamSelected}
                  streamSelected={streamSelected}
                />
                <Main_StreamsOn
                  setStreamerSelected={setstreamerSelected}
                  streamInfo={streamer3}
                  changeVisibility={setStreamSelected}
                  streamSelected={streamSelected}
                />
                <Main_StreamsOn
                  setStreamerSelected={setstreamerSelected}
                  streamInfo={streamer4}
                  changeVisibility={setStreamSelected}
                  streamSelected={streamSelected}
                />
              </>
            )}
          </div>
        </>
      )}
    </main>
  );
};
