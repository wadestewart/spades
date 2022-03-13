@summary Notes (Outline)
1. Deck of Cards (52, no jokers) - static json
 Deck = List<Card>
 Card model = {
  suit: string,
  rank: int,
  value: string,
  image: string
 }
2. Shuffle Cards
3. Deal Cards
 3a. 13 cards to 4 players
  => 4 arrays of cards, one represents each player's hand
4. Track 2 teams' cumulative scores (accumulate from each round - to 250)
  => logic to track each team's Game score after each round
5. Track scores of each round (bid and validate addition/subtraction)
 5a. Bidding:
  => logic to hold value of each players bid
   - two options: definite and possibility
 5b. Scoring
  => logic to validate if each team wins the amount they bid (plus sand bogs)
   - two arrays of scores, one represents each team's overall score
   - aggregate Game score and any overage (sandbags)
   - if (sandBags === 10 { subtract 100 from score })
   - first to 250 wins
6. Track winner of each hand (books)
  => logic to track rank of each card played and determine winner
  => logic to remove the cards from each player's cards (array)
  => logic to update score in the round after each hand

/**
 * @summary Camera access
 * https://itnext.io/accessing-the-webcam-with-javascript-and-react-33cbe92f49cb
 */

/**
 * @summary Electron??
 * 
 * need to look into any kind of mobile phone tech that might be 
 */

Technical Design:
    Components (Top down):
        1. Game:
            => score state, team state
        2. Cards:
            => value state
                value should have rank
                    - spades holding higher value than other suits
                    - each suit having it's own ranks
        3. Team:
            => player state, team bid state
        4. Player:
            => card(hand) state, player bid state
        

Trying to logic out this data flow:
    Game (root)
        * Cards (root child - team parent)
            * Team (cards child - player parent)
                * Player (team child)


