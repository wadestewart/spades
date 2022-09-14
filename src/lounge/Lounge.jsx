import React, { useEffect, useState } from 'react';
import Player from '../player/Player';
import PrimaryButton from '../buttons/primary-button/PrimaryButton';
import socket from '../helpers/socket'

/**
 * @summary This component handles 'listening' for four players from the back end
 *  and setting the start of the game once there are four
 */
const Lounge = props => {
    // local state to hold the players that have joined
    const [players, setPlayers] = useState([]);

    // user effect to connect to players socket and get real time
    //  updates from the back end
    useEffect(() => {
        socket.connect();
        // we're emitting and receiving messages in real time
        // the players socket
        socket.on('loungePlayers', players => {
            console.log(players)
            setPlayers(players);
        })

        return () => {
            socket.off('loungePlayers');
        }
    }, []);

    // set a global key value to assign to each player
    //  loop through the players returned from the socket
    //  and return a player component for each
    let key = 0;
    const renderPlayers = players.map(player => {
        if (player) {
            let id = player.name;
            key++;
            return (
                <Player
                    id={id}
                    player={player}
                    key={key}
                />
            )
        }
        return null;
    });

    // once we have 4 player, show a button to start the game
    //  there is basic validation to disallow more than 4 players
    const showStartGameButton = () => {
        if (players.length === 4) {
            return (
                <PrimaryButton text="Start Game" handleClick={() => props.handleGameStart(players)} />
            )
        }
    }

    // return the rendered players and the button to begin the game
    return (
        <div>
            <span>Lounge</span>
            {renderPlayers}
            {showStartGameButton()}
        </div>
    );
};

export default Lounge;
