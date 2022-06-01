import React, { useState } from 'react';
import skulls from '../img/spades-skull.jpg';
import './NameChoice.css';
import TeamChoice from '../team-choice/TeamChoice';

/**
 * @summary This component will start the process of building
 *  the player, buy gathering their name
 */
const NameChoice = props => {
    // local state hook
    const [name, setName] = useState("");

    // conditionally return the Team component if a player has
    //  submitted a name
    if (props.player && props.player.name) {
        return (
            <TeamChoice
                player={props.player}
                handleClick={props.handleTeamChoice}
                handleGameStart={props.handleGameStart}
            />
        );
    }

    // return the form with the input for a user to select a name
    return (
        <form className='sign-in-form' onSubmit={e => props.handleNameChoice(e, name)}>
            <h1>Pick your poison</h1>
            <h2>Spades Edition</h2>
            <img src={skulls} alt="Skulls illustrated inside a spades design." />
            <h3>Name</h3>
            <label htmlFor="Name">
                <input
                    type="text"
                    value={name}
                    placeholder=""
                    onChange={e => setName(e.target.value)}
                />
            </label>
            <input className='button' type="submit" value="Submit" />
        </form>
    );
};

export default NameChoice;
