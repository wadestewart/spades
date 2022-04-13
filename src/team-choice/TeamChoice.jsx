import React, { useEffect } from 'react';
import RoundButton from '../buttons/round-button/RoundButton';
import { io }  from "socket.io-client";
const SERVER = 'http://127.0.0.1:3050';

const TeamChoice = props => {
    // we're testing emitting and receiving messages in real time
    const socket = io(SERVER);

    // handle the lifecycle of the component
    useEffect(() => {
        if (props.player.team) {
            // emitting
            socket.on("userSocket", data => {
                console.log("I'm connected with the Back End hee hee!", data);
            });
            socket.emit('player', props.player);
        }
    }, [socket, props.player]);

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
