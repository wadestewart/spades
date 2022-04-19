import React, { useEffect, useState } from 'react';
import Player from '../player/Player';
import { io }  from "socket.io-client";
const SERVER = 'http://127.0.0.1:3050';

const Lounge = props => {
    const [players, setPlayers] = useState([]);
    
    useEffect(() => {
        // we're emitting and receiving messages in real time
        const socket = io(SERVER);

        socket.on('players', players => {
            console.log(players);
            setPlayers(players);
        })
    }, []);


    const renderPlayers = players.map(player => {
        if (player) {
            let id = player.name;
            return (
                <Player id={id} player={player} />
            )
        }
        return null;
    });
    return (
        <div>
            {renderPlayers}
        </div>
    );
};

export default Lounge;
