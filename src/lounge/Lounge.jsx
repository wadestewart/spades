import React, { useEffect, useState } from 'react';
import Player from '../player/Player';
import PrimaryButton from '../buttons/primary-button/PrimaryButton';
import { io }  from "socket.io-client";
const SERVER = process.env.REACT_APP_SPADES_API;

const Lounge = () => {
    // local state to hold the players that have joined
    const [players, setPlayers] = useState([]);

    // user effect to connect to players socket and get real time
    //  updates from the back end
    useEffect(() => {
        // we're emitting and receiving messages in real time
        const socket = io(SERVER);

        // the players socket
        socket.on('players', players => {
            console.log(players);
            setPlayers(players);
        })
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
                <Player id={id} player={player} key={key} />
            )
        }
        return null;
    });

    // once we have 4 player, show a button to start the game
    //  there is basic validation to disallow more than 4 players
    const beginGame = () => {
        if (players.length === 4) {
            return (
                <PrimaryButton text="Start Game" />
            )
        }
    }

    // return the rendered players and the button to begin the game
    return (
        <div>
            {renderPlayers}
            {beginGame()}
        </div>
    );
};

export default Lounge;
