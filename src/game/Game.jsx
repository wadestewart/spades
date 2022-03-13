import React, { useEffect, useState } from "react";
import { deck } from "../data/data";
import { shuffle } from '../helpers/shuffle';
import Card from "../card/Card";
import Player from "../player/Player";

const Game = () => {
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
                />
            );
        });

        setDeck(preparedDeck);
    }, []);

    // using different useEffect here to separate concerns
    //  we're going to set the state of each players hand
    const [playerHands, setPlayerHands] = useState([]);
    useEffect(() => {
        // instantiate an array that will end up with for hands,
        //  one for each player
        const hands = Array.from(Array(4), () => []);

        // loop through the deck and 
        for (let i = 0, j = 0; i < shuffledDeck.length; i++, j++) {
            // reset the deal every four cards
            if (j === 4) {
                j = 0;
            }
            // add the card to each players array
            hands[j].push(shuffledDeck[i]);
        }

        setPlayerHands(hands);
    }, [shuffledDeck]);

    // this method builds the players with the state of
    //  each 'hand' from the shuffled deck
    const buildPlayers = () => {
        let key = 0;
        const players = playerHands.map(hand => {
            key++;
            return(
                <Player key={key} hand={hand} />
            )
        });

        return players;
    }
    
    return(
        <div className="game">
            {buildPlayers()}
        </div>
    )

};

export default Game;
