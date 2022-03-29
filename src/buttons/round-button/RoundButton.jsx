import React from 'react';
import './RoundButton.css';

const RoundButton = props => {
    return (
        <button type="text">
            {props.text}
        </button>
    );
};

export default RoundButton;
