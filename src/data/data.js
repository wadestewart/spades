/**
 * @summary Notes (Outline)
 * 1. Deck of Cards (52, no jokers) - static json
 *  Deck = List<Card>
 *  Card model = {
 *   suit: string,
 *   rank: int,
 *   value: string,
 *   image: string
 *  }
 * 2. Shuffle Cards
 * 3. Deal Cards
 *  3a. 13 cards to 4 players
 *   => 4 arrays of cards, one represents each player's hand
 * 4. Track 2 teams' cumulative scores (accumulate from each round - to 250)
 *   => logic to track each team's Game score after each round
 * 5. Track scores of each round (bid and validate addition/subtraction)
 *  5a. Bidding:
 *   => logic to hold value of each players bid
 *    - two options: definite and possibility
 *  5b. Scoring
 *   => logic to validate if each team wins the amount they bid (plus sand bogs)
 *    - two arrays of scores, one represents each team's overall score
 *    - aggregate Game score and any overage (sandbags)
 *    - if (sandBags === 10 { subtract 100 from score })
 *    - first to 250 wins
 * 6. Track winner of each hand (books)
 *   => logic to track rank of each card played and determine winner
 *   => logic to remove the cards from each player's cards (array)
 *   => logic to update score in the round after each hand
 */

/**
 * @summary Camera access
 * https://itnext.io/accessing-the-webcam-with-javascript-and-react-33cbe92f49cb
 */

/**
 * @summary Electron??
 * 
 * need to look into any kind of mobile phone tech that might be 
 */

import spades2 from '../img/cards/2_of_spades.png';
import spades3 from '../img/cards/3_of_spades.png';
import spades4 from '../img/cards/4_of_spades.png';
import spades5 from '../img/cards/5_of_spades.png';
import spades6 from '../img/cards/6_of_spades.png';
import spades7 from '../img/cards/7_of_spades.png';
import spades8 from '../img/cards/8_of_spades.png';
import spades9 from '../img/cards/9_of_spades.png';
import spades10 from '../img/cards/10_of_spades.png';
import spadesJ from '../img/cards/jack_of_spades.png';
import spadesQ from '../img/cards/queen_of_spades.png';
import spadesK from '../img/cards/king_of_spades.png';
import spadesA from '../img/cards/ace_of_spades.png';
import hearts2 from '../img/cards/2_of_hearts.png';
import hearts3 from '../img/cards/3_of_hearts.png';
import hearts4 from '../img/cards/4_of_hearts.png';
import hearts5 from '../img/cards/5_of_hearts.png';
import hearts6 from '../img/cards/6_of_hearts.png';
import hearts7 from '../img/cards/7_of_hearts.png';
import hearts8 from '../img/cards/8_of_hearts.png';
import hearts9 from '../img/cards/9_of_hearts.png';
import hearts10 from '../img/cards/10_of_hearts.png';
import heartsJ from '../img/cards/jack_of_hearts.png';
import heartsQ from '../img/cards/queen_of_hearts.png';
import heartsK from '../img/cards/king_of_hearts.png';
import heartsA from '../img/cards/ace_of_hearts.png';
import diamonds2 from '../img/cards/2_of_diamonds.png';
import diamonds3 from '../img/cards/3_of_diamonds.png';
import diamonds4 from '../img/cards/4_of_diamonds.png';
import diamonds5 from '../img/cards/5_of_diamonds.png';
import diamonds6 from '../img/cards/6_of_diamonds.png';
import diamonds7 from '../img/cards/7_of_diamonds.png';
import diamonds8 from '../img/cards/8_of_diamonds.png';
import diamonds9 from '../img/cards/9_of_diamonds.png';
import diamonds10 from '../img/cards/10_of_diamonds.png';
import diamondsJ from '../img/cards/jack_of_diamonds.png';
import diamondsQ from '../img/cards/queen_of_diamonds.png';
import diamondsK from '../img/cards/king_of_diamonds.png';
import diamondsA from '../img/cards/ace_of_diamonds.png';
import clubs2 from '../img/cards/2_of_clubs.png';
import clubs3 from '../img/cards/3_of_clubs.png';
import clubs4 from '../img/cards/4_of_clubs.png';
import clubs5 from '../img/cards/5_of_clubs.png';
import clubs6 from '../img/cards/6_of_clubs.png';
import clubs7 from '../img/cards/7_of_clubs.png';
import clubs8 from '../img/cards/8_of_clubs.png';
import clubs9 from '../img/cards/9_of_clubs.png';
import clubs10 from '../img/cards/10_of_clubs.png';
import clubsJ from '../img/cards/jack_of_clubs.png';
import clubsQ from '../img/cards/queen_of_clubs.png';
import clubsK from '../img/cards/king_of_clubs.png';
import clubsA from '../img/cards/ace_of_clubs.png';


export const deck = [
    {
        suit: 'spades',
        value: '2',
        frontImg: spades2,
        rank: 14
    },
    {
        suit: 'spades',
        value: '3',
        frontImg: spades3,
        rank: 15
    },
    {
        suit: 'spades',
        value: '4',
        frontImg: spades4,
        rank: 16
    },
    {
        suit: 'spades',
        value: '5',
        frontImg: spades5,
        rank: 17
    },
    {
        suit: 'spades',
        value: '6',
        frontImg: spades6,
        rank: 18
    },
    {
        suit: 'spades',
        value: '7',
        frontImg: spades7,
        rank: 19
    },
    {
        suit: 'spades',
        value: '8',
        frontImg: spades8,
        rank: 20
    },
    {
        suit: 'spades',
        value: '9',
        frontImg: spades9,
        rank: 21
    },
    {
        suit: 'spades',
        value: '10',
        frontImg: spades10,
        rank: 22
    },
    {
        suit: 'spades',
        value: 'Jack',
        frontImg: spadesJ,
        rank: 23
    },
    {
        suit: 'spades',
        value: 'Queen',
        frontImg: spadesQ,
        rank: 24
    },
    {
        suit: 'spades',
        value: 'King',
        frontImg: spadesK,
        rank: 25
    },
    {
        suit: 'spades',
        value: 'Ace',
        frontImg: spadesA,
        rank: 26
    },
    {
        suit: 'hearts',
        value: '2',
        frontImg: hearts2,
        rank: 1
    },
    {
        suit: 'hearts',
        value: '3',
        frontImg: hearts3,
        rank: 2
    },
    {
        suit: 'hearts',
        value: '4',
        frontImg: hearts4,
        rank: 3
    },
    {
        suit: 'hearts',
        value: '5',
        frontImg: hearts5,
        rank: 4
    },
    {
        suit: 'hearts',
        value: '6',
        frontImg: hearts6,
        rank: 5
    },
    {
        suit: 'hearts',
        value: '7',
        frontImg: hearts7,
        rank: 6
    },
    {
        suit: 'hearts',
        value: '8',
        frontImg: hearts8,
        rank: 7
    },
    {
        suit: 'hearts',
        value: '9',
        frontImg: hearts9,
        rank: 8
    },
    {
        suit: 'hearts',
        value: '10',
        frontImg: hearts10,
        rank: 9
    },
    {
        suit: 'hearts',
        value: 'Jack',
        frontImg: heartsJ,
        rank: 10
    },
    {
        suit: 'hearts',
        value: 'Queen',
        frontImg: heartsQ,
        rank: 11
    },
    {
        suit: 'hearts',
        value: 'King',
        frontImg: heartsK,
        rank: 12
    },
    {
        suit: 'hearts',
        value: 'Ace',
        frontImg: heartsA,
        rank: 13
    },
    {
        suit: 'diamonds',
        value: '2',
        frontImg: diamonds2,
        rank: 1
    },
    {
        suit: 'diamonds',
        value: '3',
        frontImg: diamonds3,
        rank: 2
    },
    {
        suit: 'diamonds',
        value: '4',
        frontImg: diamonds4,
        rank: 3
    },
    {
        suit: 'diamonds',
        value: '5',
        frontImg: diamonds5,
        rank: 4
    },
    {
        suit: 'diamonds',
        value: '6',
        frontImg: diamonds6,
        rank: 5
    },
    {
        suit: 'diamonds',
        value: '7',
        frontImg: diamonds7,
        rank: 6
    },
    {
        suit: 'diamonds',
        value: '8',
        frontImg: diamonds8,
        rank: 7
    },
    {
        suit: 'diamonds',
        value: '9',
        frontImg: diamonds9,
        rank: 8
    },
    {
        suit: 'diamonds',
        value: '10',
        frontImg: diamonds10,
        rank: 9
    },
    {
        suit: 'diamonds',
        value: 'Jack',
        frontImg: diamondsJ,
        rank: 10
    },
    {
        suit: 'diamonds',
        value: 'Queen',
        frontImg: diamondsQ,
        rank: 11
    },
    {
        suit: 'diamonds',
        value: 'King',
        frontImg: diamondsK,
        rank: 12
    },
    {
        suit: 'diamonds',
        value: 'Ace',
        frontImg: diamondsA,
        rank: 13
    },
    {
        suit: 'clubs',
        value: '2',
        frontImg: clubs2,
        rank: 1
    },
    {
        suit: 'clubs',
        value: '3',
        frontImg: clubs3,
        rank: 2
    },
    {
        suit: 'clubs',
        value: '4',
        frontImg: clubs4,
        rank: 3
    },
    {
        suit: 'clubs',
        value: '5',
        frontImg: clubs5,
        rank: 4
    },
    {
        suit: 'clubs',
        value: '6',
        frontImg: clubs6,
        rank: 5
    },
    {
        suit: 'clubs',
        value: '7',
        frontImg: clubs7,
        rank: 6
    },
    {
        suit: 'clubs',
        value: '8',
        frontImg: clubs8,
        rank: 7
    },
    {
        suit: 'clubs',
        value: '9',
        frontImg: clubs9,
        rank: 8
    },
    {
        suit: 'clubs',
        value: '10',
        frontImg: clubs10,
        rank: 9
    },
    {
        suit: 'clubs',
        value: 'Jack',
        frontImg: clubsJ,
        rank: 10
    },
    {
        suit: 'clubs',
        value: 'Queen',
        frontImg: clubsQ,
        rank: 11
    },
    {
        suit: 'clubs',
        value: 'King',
        frontImg: clubsK,
        rank: 12
    },
    {
        suit: 'clubs',
        value: 'Ace',
        frontImg: clubsA,
        rank: 13
    },
]