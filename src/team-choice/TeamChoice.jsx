import React, { useEffect } from 'react';
import sword from '../img/sword.svg';
import crown from '../img/crown.svg';
import PrimaryButton from '../buttons/primary-button/PrimaryButton';
import Lounge from '../lounge/Lounge';
import './TeamChoice.css';
import socket from '../helpers/socket';
const TeamChoice = props => {
    const { player } = props
    // handle the lifecycle of the component
    useEffect(() => {
        // check for the player's team to be populated before connecting to the socket
        if (player.team.name) {
            // we're emitting and receiving messages in real time
            socket.auth = { username: player.name }
            socket.on("userSocket", socketId => {
                console.log("I'm connected with the Back End hee hee!", socketId)
            });
            // emitting player over socket
            socket.emit('player', player)
            return () => {
                socket.off('userSocket');
            }
        }

    }, [player]);

    // if the user has selected a team, put them in the lounge
    if (props.player && props.player.team.name) {
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
