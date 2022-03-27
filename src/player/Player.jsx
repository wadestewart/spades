import React from 'react';
import './Player.css';

/**
 * @summary this component renders a Player with it's
 *  hand (a list of Card components)
 */
const Player = props => {
    return (
        <div className='player' role='listitem'>
            <h2>Player #{props.id}</h2>
            {props.hand}
        </div>
    );
};

export default Player;
