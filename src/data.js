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

export const deck = [
    {
        suit: 'spades',
        value: '2',
        rank: 14
    },
    {
        suit: 'spades',
        value: '3',
        rank: 15
    },
    {
        suit: 'spades',
        value: '4',
        rank: 16
    },
    {
        suit: 'spades',
        value: '5',
        rank: 17
    },
    {
        suit: 'spades',
        value: '6',
        rank: 18
    },
    {
        suit: 'spades',
        value: '7',
        rank: 19
    },
    {
        suit: 'spades',
        value: '8',
        rank: 20
    },
    {
        suit: 'spades',
        value: '9',
        rank: 21
    },
    {
        suit: 'spades',
        value: '10',
        rank: 22
    },
    {
        suit: 'spades',
        value: 'J',
        rank: 23
    },
    {
        suit: 'spades',
        value: 'Q',
        rank: 24
    },
    {
        suit: 'spades',
        value: 'K',
        rank: 25
    },
    {
        suit: 'spades',
        value: 'A',
        rank: 26
    },
    {
        suit: 'hearts',
        value: '2',
        rank: 1
    },
    {
        suit: 'hearts',
        value: '3',
        rank: 2
    },
    {
        suit: 'hearts',
        value: '4',
        rank: 3
    },
    {
        suit: 'hearts',
        value: '5',
        rank: 4
    },
    {
        suit: 'hearts',
        value: '6',
        rank: 5
    },
    {
        suit: 'hearts',
        value: '7',
        rank: 6
    },
    {
        suit: 'hearts',
        value: '8',
        rank: 7
    },
    {
        suit: 'hearts',
        value: '9',
        rank: 8
    },
    {
        suit: 'hearts',
        value: '10',
        rank: 9
    },
    {
        suit: 'hearts',
        value: 'J',
        rank: 10
    },
    {
        suit: 'hearts',
        value: 'Q',
        rank: 11
    },
    {
        suit: 'hearts',
        value: 'K',
        rank: 12
    },
    {
        suit: 'hearts',
        value: 'A',
        rank: 13
    },
    {
        suit: 'diamonds',
        value: '2',
        rank: 1
    },
    {
        suit: 'diamonds',
        value: '3',
        rank: 2
    },
    {
        suit: 'diamonds',
        value: '4',
        rank: 3
    },
    {
        suit: 'diamonds',
        value: '5',
        rank: 4
    },
    {
        suit: 'diamonds',
        value: '6',
        rank: 5
    },
    {
        suit: 'diamonds',
        value: '7',
        rank: 6
    },
    {
        suit: 'diamonds',
        value: '8',
        rank: 7
    },
    {
        suit: 'diamonds',
        value: '9',
        rank: 8
    },
    {
        suit: 'diamonds',
        value: '10',
        rank: 9
    },
    {
        suit: 'diamonds',
        value: 'J',
        rank: 10
    },
    {
        suit: 'diamonds',
        value: 'Q',
        rank: 11
    },
    {
        suit: 'diamonds',
        value: 'K',
        rank: 12
    },
    {
        suit: 'diamonds',
        value: 'A',
        rank: 13
    },
    {
        suit: 'clubs',
        value: '2',
        rank: 1
    },
    {
        suit: 'clubs',
        value: '3',
        rank: 2
    },
    {
        suit: 'clubs',
        value: '4',
        rank: 3
    },
    {
        suit: 'clubs',
        value: '5',
        rank: 4
    },
    {
        suit: 'clubs',
        value: '6',
        rank: 5
    },
    {
        suit: 'clubs',
        value: '7',
        rank: 6
    },
    {
        suit: 'clubs',
        value: '8',
        rank: 7
    },
    {
        suit: 'clubs',
        value: '9',
        rank: 8
    },
    {
        suit: 'clubs',
        value: '10',
        rank: 9
    },
    {
        suit: 'clubs',
        value: 'J',
        rank: 10
    },
    {
        suit: 'clubs',
        value: 'Q',
        rank: 11
    },
    {
        suit: 'clubs',
        value: 'K',
        rank: 12
    },
    {
        suit: 'clubs',
        value: 'A',
        rank: 13
    },
]
