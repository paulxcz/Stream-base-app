import React, { useState } from "react";
import { IoPause } from "react-icons/io5";
import { CgMiniPlayer } from "react-icons/cg";
import images from "../images/listImages";
import {
  IoArrowBack,
  IoArrowForward,
  IoHeartOutline,
  IoStarOutline,
} from "react-icons/io5";
import colorRandom from "../helpers/generateRandom";
import { BiUser } from "react-icons/bi";
import { MessageBox } from "./MessageBox";

import "../styles/StreamView/StreamView.scss";

export const StreamView = ({
  streamerSelected,
  setPopupVisibility,
  setStreamSelected,
}) => {
  const [chatVisibility, setchatVisibility] = useState(true);

  return (
    <div className="streamView-container">
      <div className="stream-video-section">
        <div className="video-streamer-container">
          <img src={streamerSelected.imgStreamView}></img>
          <div className="icons">
            <IoPause />
            <CgMiniPlayer
              onClick={() => {
                setPopupVisibility(true);
                setStreamSelected(false);
              }}
            />
          </div>
          {!chatVisibility && (
            <IoArrowBack
              className="icon-arrow"
              onClick={() => {
                setchatVisibility(!chatVisibility);
              }}
            />
          )}
        </div>

        <div className="viewers-section">
          <div className="first-section">
            <div className="img-with-text">
              <img src={streamerSelected.imgStreamer} />
              <h4>EN VIVO</h4>
            </div>
            <div className="name-and-category">
              <h4>{streamerSelected.title}</h4>
              <p>{streamerSelected.category}</p>
            </div>
          </div>
          <div className="second-section">
            <div className="buttons">
              <button className="follow-button">
                <IoHeartOutline />
                <span>Seguir</span>
              </button>
              <button className="suscribe-button">
                <IoStarOutline />
                <span>Suscribirse</span>
              </button>
            </div>
            <div className="viewers-time-section">
              <span className="viewers">
                <BiUser /> {streamerSelected.spectators}
              </span>
              <span className="timer">0:14:48</span>
            </div>
          </div>
        </div>

        <div className="about-streamer">
          <div className="information">
            <h1>Acerca de elXokas</h1>
            <h4>
              <span>
                <b>5.8 M</b> seguidores
              </span>
            </h4>
          </div>
        </div>
      </div>

      {chatVisibility && (
        <div className="stream-chat">
          <div className="text-header">
            <IoArrowForward
              onClick={() => {
                setchatVisibility(!chatVisibility);
              }}
            />
            <h1>CHAT DEL STREAM</h1>
          </div>
          <div className="user-messages">
            <MessageBox color={colorRandom()} />
            <MessageBox color={colorRandom()} />
            <MessageBox color={colorRandom()} />
            <MessageBox color={colorRandom()} />
            <MessageBox color={colorRandom()} />
            <MessageBox color={colorRandom()} />
            <MessageBox color={colorRandom()} />
            <MessageBox color={colorRandom()} />
            <MessageBox color={colorRandom()} />
          </div>
          <div className="users-chat"></div>
        </div>
      )}
    </div>
  );
};
