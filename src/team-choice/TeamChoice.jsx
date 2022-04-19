import React, { useEffect, useState } from 'react';
import RoundButton from '../buttons/round-button/RoundButton';
import Lounge from '../lounge/Lounge';
import { io }  from "socket.io-client";
const SERVER = 'http://127.0.0.1:3050';

const TeamChoice = props => {
    const [players, setPlayers] = useState([])

    // handle the lifecycle of the component
    useEffect(() => {
        // we're emitting and receiving messages in real time
        const socket = io(SERVER);

        if (props.player.team) {
            socket.on("userSocket", data => {
                console.log("I'm connected with the Back End hee hee!", data);
            });
            // emitting player over socket
            socket.emit('player', props.player, (response) => {
                setPlayers(players => [...players, response]);
            });
        }
        
        return () => {
            socket.off('userSocket');
            socket.off('players');
        }
        // this is needed for socket.io to update on mount only
        //  eslint-disable-next-line react-hooks/exhaustive-deps
    }, [props.player]);

    if (props.player && props.player.team) {
        return (
            <Lounge players={players}/>
        )
    }

    let name;
    if (props.player && props.player.name) {
        ({ player: { name } } = props);
    }
    const teamOne = 1;
    const teamTwo = 2;
    const tagline = `${name}, Pick your team`
    return (
        <div className='team-choice-container'>
            <h1>{tagline}</h1>
            <div className='buttons-container'>
                <RoundButton id={teamOne} text="Team 1" {...props} />
                <RoundButton id={teamTwo} text="Team 2" {...props} />
            </div>
        </div>
    );
};

export default TeamChoice;
