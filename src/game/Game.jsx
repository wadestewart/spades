import React, { useEffect, useState } from 'react';
import { deck } from "../data/data";
import { shuffle } from '../helpers/shuffle';
import { buildGamePlayers } from '../helpers/buildGamePlayer';
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
    // let's write a hook!
    //  state of shuffled cards
    const [shuffledDeck, setDeck] = useState([]);
    // useEffect for side effects
    //  we're going to shuffle the deck in the first render
    //  and set the shuffledDeck state
    useEffect(() => {
        const shuffledDeck = shuffle(deck);
        let key = 0;

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

        setDeck(preparedDeck);
    }, []);

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

     // return a game board with built players (name, team, hand)
    return (
        <div>
            <span>Game Board</span>
            {props.players && playerHands
                ? buildGamePlayers(props.players, playerHands)
                : null
            }
        </div>
    );
};

export default Game;
