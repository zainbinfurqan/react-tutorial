
import React, { useEffect, useState } from 'react';
import { Player, ControlBar, PlayToggle } from 'video-react';
import './style.css'
function Root_Video(props) {
    // The click event on this button will bubble up to parent,
    // because there is no 'onClick' attribute defined
    return (
        <div className="modal" style={{ border: 'solid 1px' }}>
            <div style={{ width: 'auto' }}>
                <button onClick={props.close}>close</button>

                <Player poster="Assets/Images/default_thumbnail.jpg" src="http://commondatastorage.googleapis.com/gtv-videos-bucket/sample/WhatCarCanYouGetForAGrand.mp4" className='video-player_1' >
                    <PlayToggle />
                    <ControlBar autoHide={true} disableDefaultControls={true}  >
                    </ControlBar>
                </Player>
            </div>
        </div>
    );
}
export default Root_Video