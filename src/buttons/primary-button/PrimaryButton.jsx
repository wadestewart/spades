import React from 'react';
import './PrimaryButton.css';

/**
 * @summary reusable button component
 * @prop handleClick: the click handler for the action
 * @prop text: the text value that will be shown in the button
 */
const PrimaryButton = props => {
    return (
        <button type="text" onClick={props.handleClick}>
            {props.text}
        </button>
    );
};

export default PrimaryButton;
