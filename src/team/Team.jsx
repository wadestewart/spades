import React from 'react';
import './Team.css';

/**
 * @summary this component will render each individual team
 *  with Player components (it's children)
 */
const Team = props => {
    return (
        <div className='team' role='list'>
            {props.children}
        </div>
    );
};

export default Team;
