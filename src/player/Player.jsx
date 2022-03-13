import React, { useState, useEffect } from 'react';

const Player = props => {
    return (
        <div className='player'>
            {props.hand}
        </div>
    );
};

export default Player;
