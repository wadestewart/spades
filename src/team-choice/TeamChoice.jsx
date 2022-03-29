import React from 'react';
import RoundButton from '../buttons/round-button/RoundButton';

const TeamChoice = props => {
    let name;
    if (props.player && props.player.name) {
        ({ player: { name } } = props);
    }
    const teamOne = 1;
    const teamTwo = 2;
    const tagline = `${name}, Pick your team`
    return (
        <div className='team-choice-container'>
            <h1>{tagline}</h1>
            <div className='buttons-container'>
                <RoundButton id={teamOne} text="Team 1" {...props} />
                <RoundButton id={teamTwo} text="Team 2" {...props} />
            </div>
        </div>
    );
};

export default TeamChoice;
