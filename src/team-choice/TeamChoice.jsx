import React, { useEffect, useState } from 'react';
import sword from '../img/sword.svg';
import crown from '../img/crown.svg';
import PrimaryButton from '../buttons/primary-button/PrimaryButton';
import Lounge from '../lounge/Lounge';
import { io }  from "socket.io-client";
import './TeamChoice.css';
const SERVER = 'http://localhost:3050';
const TeamChoice = props => {
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
            <Lounge handleGameStart={props.handleGameStart} />
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
    const tagline = `${name}, pick your team`
    return (
        <div className='team-choice-container'>
            <h1>{tagline}</h1>
            <div className='buttons-container'>
              <div className='team-button'>
                <img src={crown} alt="Crown icon" />
                <PrimaryButton id={1} text="Crown Royals" handleClick={e => handleTeamSelection(e, 1)} />
              </div>
              <div className='team-button'>
                <img src={sword} alt="Sword icon" />
                <PrimaryButton id={2} text="Cutthroats" handleClick={e => handleTeamSelection(e, 2)} />
              </div>
            </div>
        </div>
    );
};

export default TeamChoice;
