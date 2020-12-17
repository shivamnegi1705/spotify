import React from 'react';
import '../css/Player.css';

import SideBar from './SideBar';
import Body from './Body';
import Footer from './Footer';


const Player = ({spotify}) => {
    return (
        <div className="player">
            <div className="player__body">
                <SideBar />
                <Body spotify={spotify} />
            </div>
            <Footer/>
        </div>
    )
}

export default Player;