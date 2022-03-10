import React, { useEffect, useState } from 'react';
import { deck } from '../data/data';
import Card from '../card/Card';
import './Cards.css';

const Cards = () => {
    // let's write a hook!
    //  state of shuffled cards
    const [shuffledDeck, setDeck] = useState([]);

    // use effect for side effects
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

    // shuffle the deck of cards
    //   from this SO https://stackoverflow.com/a/2450976
    const shuffle = array => {
        // setting current index to array length
        //  so we start at the end
        let currentIndex = array.length, randomIndex;

        // while there are elements to shuffle
        while (currentIndex !== 0) {

            // pick an index that remains
            randomIndex = Math.floor(Math.random() * currentIndex);
            // decrement from the end of the array
            currentIndex --;

            // and swap out with the current element
            [array[currentIndex], array[randomIndex]] = [array[randomIndex], array[currentIndex]]
        }

        // returned the shuffled array
        return array;
    }

    return (
        <div className='card-list' role='list'>
            {shuffledDeck}
        </div>
    );
};

export default Cards;
