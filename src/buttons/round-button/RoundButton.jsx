import React from 'react';
import './RoundButton.css';

const RoundButton = props => {
    return (
        <button type="text" onClick={e => props.handleClick(e, props.id)}>
            {props.text}
        </button>
    );
};

export default RoundButton;
