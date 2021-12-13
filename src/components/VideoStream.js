import React from "react";

import { IoIosArrowBack, IoIosArrowForward, IoPLaySharp } from "react-icons/io";
import {streamer1, streamer2, streamer3} from '../data/streamers'
import { StreamInBanner } from "./StreamInBanner";

import "../styles/VideoStream/VideoStream.scss";
export const VideoStream = () => {
  return (
    <div className="video-banner-container">
      <div className="arrow-back">
        <IoIosArrowBack />
      </div>
      <div className="arrow-foward">
        <IoIosArrowForward />
      </div>
      <StreamInBanner infoStream={streamer1} />
      <StreamInBanner infoStream={streamer2} className="inactive-right" />
      <StreamInBanner infoStream={streamer3} className="inactive-left" />
    </div>
  );
};
