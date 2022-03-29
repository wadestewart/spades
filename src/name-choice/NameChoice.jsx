import React, { useEffect, useState } from 'react';
import dogs from '../img/dogs_playing_poker.jpeg';
import './NameChoice.css';
import TeamChoice from '../team-choice/TeamChoice';

/**
 * @summary This component will start the process of building
 *  the player, buy gathering their name
 */
const NameChoice = props => {
    // local state hook
    const [name, setName] = useState("");

    // checking for the player change
    useEffect(() => {
        console.log(props.player)
    }, [props.player]);

    // conditionally return the Team component if a player has
    //  submitted a name
    if (props.player && props.player.name) {
        return (
            <TeamChoice player={props.player}/>
        );
    }
    return (
        <form className='sign-in-form' onSubmit={e => props.handleSubmit(e, name)}>
            <h1>Pick Your Poison</h1>
            <img src={dogs} alt="painting of dogs playing poker" />
            <label htmlFor="">
                <input
                    type="text"
                    value={name}
                    placeholder="Your Name"
                    onChange={e => setName(e.target.value)}
                />
            </label>
            <input className='button' type="submit" value="Submit" />
        </form>
    );
};

export default NameChoice;
