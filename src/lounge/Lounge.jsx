import React, { useEffect, useRef, useState } from 'react';
import Player from '../player/Player';
import PrimaryButton from '../buttons/primary-button/PrimaryButton';
import { io }  from "socket.io-client";
const SERVER = 'http://localhost:3050';

/**
 * @summary This component handles 'listening' for four players from the back end
 *  and setting the start of the game once there are four
 */
const Lounge = props => {
    // creating ref for video
    const videoRef = useRef(null);

    // listening for updates of the videoRef dependency array
    useEffect(() => {
        getMedia();
    }, [videoRef]);

    // method to handle streaming the video
    const getMedia = async () => {
        // set constraints for video and start stream
        const vidConstraints = {
            audio: false,
            video: {
                facingMode: "user",
                width: 200
            }
        };
        const vidStream = await navigator.mediaDevices.getUserMedia(vidConstraints);
        // set constraints for audio and start stream
        const audioConstraints = {
            audio: {
                echoCancellation: {exact: false}
            }
        };
        const audioStream = await navigator.mediaDevices.getUserMedia(audioConstraints);

        // cross the streams
        const crossedStreams = new MediaStream([...vidStream.getVideoTracks(), ...audioStream.getAudioTracks()]);
        navigator.mediaDevices
            .getUserMedia({
                video: { width: 300 },
            audio: {
                echoCancellation: {exact: false}
            },
            })
            .then(stream => {
                let video = videoRef.current;
                video.srcObject = stream;
                video.play();
            })
            .catch(err => {
                console.error("error:", err);
            });
    };
    // local state to hold the players that have joined
    const [players, setPlayers] = useState([]);

    // user effect to connect to players socket and get real time
    //  updates from the back end
    useEffect(() => {
        // we're emitting and receiving messages in real time
        const socket = io(SERVER);

        // the players socket
        socket.on('players', players => {
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
            <video muted="true" ref={videoRef} />
            {renderPlayers}
            {showStartGameButton()}
        </div>
    );
};

export default Lounge;
