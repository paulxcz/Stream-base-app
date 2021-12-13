import React, { useState } from "react";

import { StreamerOnNavbar } from "./StreamerOnNavbar";
import {streamer1, streamer2, streamer3, streamer4} from '../data/streamers';
import {
    IoArrowBack,
    IoArrowForward
} from 'react-icons/io5'

import "../styles/NavbarStreamers/NavbarSreamers.scss";

export const NavbarStreamers = ({setStreamerSelected, setStreamSelected}) => {

    const [expandNav, setExpandNav] = useState(true);
    
  return (
    <div className={`navbar-streamers ${expandNav ? 'expand':'reduce'}`}>
      <div className="title">
        {
          expandNav && <h4>CANALES RECOMENDADOS</h4>
        }
        <button onClick={()=>{
          setExpandNav(!expandNav)
        }}> 
            {
              expandNav ?
              <IoArrowBack className="icon" />
              :
              <IoArrowForward className="icon" />
            }
        </button>
      </div>
      <StreamerOnNavbar setStreamerSelected={setStreamerSelected} setStreamSelected={setStreamSelected} showDetails={expandNav} streamInfo={streamer1} category="Charlando"/>
      <StreamerOnNavbar setStreamerSelected={setStreamerSelected} setStreamSelected={setStreamSelected} showDetails={expandNav} streamInfo={streamer2} category="charlando"/>
      <StreamerOnNavbar setStreamerSelected={setStreamerSelected} setStreamSelected={setStreamSelected} showDetails={expandNav} streamInfo={streamer3} category="League of Legends"/>
      <StreamerOnNavbar setStreamerSelected={setStreamerSelected} setStreamSelected={setStreamSelected} showDetails={expandNav} streamInfo={streamer4} category="League of Legends"/>
    </div>
  );
};
