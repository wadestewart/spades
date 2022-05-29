import React from 'react';
import './Player.css';

/**
 * @summary this component renders a Player with it's
 *  hand (a list of Card components)
 */
const Player = props => {
    return (
        <div className='player' role='listitem'>
            <h2>{props.player.name}</h2>
            <h2>Team {props.player.team}</h2>
            <div className='player-hand'>
                {props.hand}
            </div>
        </div>
    );
};

export default Player;
