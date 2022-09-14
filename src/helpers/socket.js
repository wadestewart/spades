import { io } from 'socket.io-client';

const SERVER = process.env.REACT_APP_SPADES_API;
const socket = io(SERVER);

// catch-all listener
socket.onAny((eventName, ...args) => {
    console.log(eventName, ...args);
});

export default socket;
