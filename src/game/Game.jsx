import React, { useEffect, useState } from "react";
import { deck } from "../data/data";
import { shuffle } from '../helpers/shuffle';
import Card from "../card/Card";
import Player from "../player/Player";
import TeamButton from "../buttons/team-button/TeamButton";
import './Game.css';
import Teams from "../teams/Teams";

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
        // instantiate an array that will end up with four hands,
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

    // here we're handling the team selection,
    //  and setting the state to pass down to the Teams component
    const [teamPlayers, setTeamPlayer] = useState([]);
    const handleTeamChoice = params => {
        // update the player object with the team choice
        params.player.team = params.team;

        // add the new player to the teams state
        const updatedState = [
            ...teamPlayers,
            params.player
        ];

        // set the updated state 
        setTeamPlayer(updatedState);
    }

    // method to build buttons for players to choose teams
    const buildTeamButtons = (player, playerId) => {
        const teams = ['Team #1', 'Team #2'];
        let key = 0;
        const buttons = teams.map((team, i) => {
            key++;
            const id = `${playerId}-${key}`
            return(
                <TeamButton 
                    key={id}
                    handleClick={handleTeamChoice}
                    player={player}
                    team={i}
                    text={team}
                />
            );
        });
        return buttons;
    }

    // this method builds the players with the state of
    //  each 'hand' from the shuffled deck
    const buildPlayers = () => {
        let key = 0;
        const players = playerHands.map(hand => {
            key++;
            return(
                <div key={key} className="buttons">
                    {buildTeamButtons({
                        player: <Player key={key} hand={hand} id={key} />
                    }, key)}
                </div>
            )
        });

        return players;
    }
    
    return(
        <div className="game">
            {buildPlayers()}
            <Teams teamPlayers={teamPlayers} />
        </div>
    )

};

export default Game;
