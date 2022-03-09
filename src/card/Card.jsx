import React from 'react';

const Card = props => {
    return (
        <div className='card'>
            <p>{props.suit}</p>
            <p>{props.value}</p>
        </div>
    );
};

export default Card;
