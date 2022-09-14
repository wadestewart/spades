// import 
import React, { useEffect, useState } from 'react';
import socket from '../helpers/socket';

import { deck } from "../data/data";
import { shuffle } from '../helpers/shuffle';
import { renderGame, buildGamePlayers, buildPlayersWithHands } from '../helpers/buildGamePlayer';
import { sortHands } from '../helpers/sortHands';
import Card from "../card/Card";
import './Game.css';


/**
 * @summary the game container, we'll manage:
 *  1. The players (props)
 *  2. The shuffling of the cards
 *  3. The game rounds (bidding and scoring)
 *  4. The game score (aggregate after each round)
 */
const Game = props => {
    // the players prop that comes from the lounge
    const { players } = props;
    // check if the first player's hand has been populated
    const isPopulated = players[0]?.hand?.length
    // getting the players if they're in session storage
    const reloadedPlayers = sessionStorage.getItem('gamePlayers')
    // let's write a hook!
    //  state of shuffled cards
    const [shuffledDeck, setDeck] = useState([]);
    // useEffect for side effects
    //  we're going to shuffle the deck in the first render
    //  and set the shuffledDeck state
    useEffect(() => {
        // build a shuffled deck from the helper method
        const shuffledDeck = shuffle(deck);
        let key = 0;

        // build a deck of cards from the shuffled deck
        const preparedDeck = [];
        shuffledDeck.forEach(card => {
            key++;
            preparedDeck.push(
                <Card
                    key={key}
                    suit={card.suit}
                    frontImage={card.frontImg}
                    value={card.value}
                    rank={card.rank}
                />
            );
        });

        // set in local state
        setDeck(preparedDeck);
    }, []); // empty array for initial render

    /**
     * @summary this method sets the state of each player's hand
     * @note using different useEffect here to separate concerns
     */
     const [playerHands, setPlayerHands] = useState([]);
     useEffect(() => {
         // instantiate an array that will end up with four hands,
         //  one for each player
         const hands = Array.from(Array(4), () => []);
 
         // loop through the deck and...
         for (let i = 0, j = 0; i < shuffledDeck.length; i++, j++) {
             // ...reset the deal every four cards
             if (j === 4) {
                 j = 0;
             }
             // add the card to each players array
             hands[j].push(shuffledDeck[i]);
         }
 
         // sort the hands by suit and rank
         const sortedHands = sortHands(hands);
         // set the sorted hands to local state
         setPlayerHands(sortedHands);
     }, [shuffledDeck]);

    //  // here we're going to take the built players and give them to the server
    //  //   then we'll get this player's hand back
    //  useEffect(() => {
    //     socket.connect()
    //     const playersWithHands = buildPlayersWithHands(props.players, playerHands)

    //     // emitting player over socket
    //     socket.emit('playersWithHands', playersWithHands);

    //     socket.on('builtPlayer', (builtPlayer) => {
    //         console.log(builtPlayer)
    //     })
    // }, [props.players, playerHands]);

    // here we're going to passing the game players to the server
    //  once they are built and in local state
    const [gamePlayers, setGamePlayers] = useState()
    useEffect(() => {
        socket.connect()
        
        if (players[0]?.hand?.length && !reloadedPlayers) {
            // render conditionally on reload
            reloadedPlayers
                ? socket.emit('gamePlayers', players)
                : socket.emit('gamePlayers', reloadedPlayers)

            socket.on('setGamePlayers', gamePlayersToBeSet => {
                console.log(gamePlayersToBeSet)
                setGamePlayers(gamePlayersToBeSet)

                // if this isn't a reload, set the players in 
                if (!reloadedPlayers) {
                    console.log('commented back in when ready to set sessionStorage, gamePlayers')
                    // sessionStorage.setItem('gamePlayers', gamePlayersToBeSet)
                }
            })
        }
    }, [ isPopulated, players, reloadedPlayers ]);

    // const renderPlayers = () => {
    //     let playersToRender
    //     if (
    //         players &&
    //         playerHands.length &&
    //         playerHands[0].length &&
    //         !gamePlayers
    //     ) {
    //         playersToRender = buildGamePlayers(players, playerHands)
    //     }

    //     if (gamePlayers) {
    //         playersToRender = buildGamePlayers(gamePlayers)
    //     }
                

    //     return playersToRender
    // }

     // return a game board with built players (name, team, hand)
    return (
        <div>
            <span>Game Board</span>
            {players && playerHands.length && playerHands[0].length
                ? renderGame(players, playerHands)
                : null
            }
        </div>
    );
};

export default Game;
