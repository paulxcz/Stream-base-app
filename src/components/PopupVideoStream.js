import React from 'react'
import { CgMiniPlayer, CgClose } from "react-icons/cg";

import '../styles/PopupVideoStream/PopupVideoStream.scss'
export const PopupVideoStream = ({setPopupVisibility,setStreamSelected, streamerInfo}) => {

    return (
        <div className='popup-video-container' >
            <img className='video-stream' src={streamerInfo.imgStreamView}/>
            <CgMiniPlayer className='icon-mini-player' onClick={ 
                ()=>{
                    setPopupVisibility(false);
                    setStreamSelected(true)
                }
             }/>
             <CgClose className='icon-close' onClick={
                 ()=>{
                     setPopupVisibility(false);
                 }
             }/>
             
        </div>
    )
}
