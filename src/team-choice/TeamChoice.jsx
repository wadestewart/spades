import React, { useEffect, useState } from 'react';
import PrimaryButton from '../buttons/primary-button/PrimaryButton';
import Lounge from '../lounge/Lounge';
import { io }  from "socket.io-client";
const SERVER = process.env.REACT_APP_SPADES_API;
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
            socket.emit('player', props.player);
        }

        return () => {
            socket.off('userSocket');
            socket.off('players');
        }
        // this is needed for socket.io to update on mount only
        //  eslint-disable-next-line react-hooks/exhaustive-deps
    }, [props.player]);

    // if the user has selected a team, put them in the lounge
    if (props.player && props.player.team) {
        return (
            <Lounge players={players}/>
        )
    }

    // this is the custom click handler we are passing into the
    //  reusable button
    const handleTeamSelection = (e, id) => {
        props.handleClick(e, id);
    }

    // deconstruct the player object to get the name
    let name;
    if (props.player && props.player.name) {
        ({ player: { name } } = props);
    }

    // set the tagline and render the buttons with custom handlers
    const tagline = `${name}, Pick your team`
    return (
        <div className='team-choice-container'>
            <h1>{tagline}</h1>
            <div className='buttons-container'>
                <PrimaryButton id={1} text="Team 1" handleClick={e => handleTeamSelection(e, 1)} />
                <PrimaryButton id={2} text="Team 2" handleClick={e => handleTeamSelection(e, 2)} />
            </div>
        </div>
    );
};

export default TeamChoice;
