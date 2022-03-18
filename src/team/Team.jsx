import React, { useEffect, useState } from 'react';
import './Team.css';

const Team = props => {
    const buildTeam = () => {
        console.log(props.children);        

        return props.children;
    }

    return (
        <div className='team' role='list'>
            {buildTeam()}
        </div>
    );
};

export default Team;
