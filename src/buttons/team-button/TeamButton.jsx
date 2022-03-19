import React from 'react';

const TeamButton = props => {
    const params = {
        team: props.team,
        player: props.player
    };
    return (
        <button type='button' onClick={() => props.handleClick(params)}>
            {props.text}
        </button>
    );
};

export default TeamButton;
