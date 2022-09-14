import './Player.css'

import React, { useEffect } from 'react'
import socket from '../helpers/socket';


// import { io }  from "socket.io-client"

// const SERVER = process.env.REACT_APP_SPADES_API


/**
 * @summary this component renders a Player with it's
 *  hand (a list of Card components)
 */
const Player = props => {
    const { hand, player, privatePlayer } = props

    // handle the lifecycle of the component
    useEffect(() => {
        // check for the player's team to be populated before connecting to the socket
        if (player && privatePlayer) {
            socket.connect()
            // console.log(socket.io.engine)
            // socket.emit('privatePlayer', player)

            socket.on('gamePlayer', player => {
                console.log(player)
            })

            // disconnect socket
            return () => {
                socket.off('privatePlayer');
            }
        }

    }, [player, privatePlayer]);

    return (
        <div className='player' role='listitem'>
            <h2>{player.name}</h2>
            <h2>Team {player.team.name}</h2>
            <div className='player-hand'>
                {player.hand}
            </div>
        </div>
    );
};

export default Player;
