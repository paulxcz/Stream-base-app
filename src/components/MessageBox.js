import React, { memo } from "react";


export const MessageBox = ({color}) => {

  return (
    <div className='message-box'>
      <span className={`user ${color}`}>Trrumpi</span>
      <span>: </span>
      <span className="message">
        Texto del mensaje
      </span>
    </div>
  );
};
