import React, { useState, useEffect } from 'react';
import './Player.css';

const Player = props => {
    return (
        <div className='player'>
            <h2>Player #{props.number}</h2>
            {props.hand}
        </div>
    );
};

export default Player;
