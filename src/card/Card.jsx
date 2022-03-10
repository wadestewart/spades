import React from 'react';
import './Card.css';

const Card = props => {
    const altString = `${props.value} of ${props.suit}`;
    return (
        <div className='card'>
            <img className='card-image' src={props.frontImage} alt={altString} />
        </div>
    );
};

export default Card;
