import React, { useEffect, useState } from 'react';
import Team from '../team/Team';

const Teams = props => {
    const buildTeams = () => {
        const teams = props.teamPlayers.map(teamPlayer => {
            // set team one based on user selection
            if (teamPlayer.team === 0) {
                const teamOne = [];
                teamOne.push(teamPlayer.player);

                return (
                    <Team key='1'>
                        {teamOne}
                    </Team>
                );
            }

            // set team two
            const teamTwo = [];
            teamTwo.push(teamPlayer.player);
            return (
                <Team key='2'>
                    {teamTwo}
                </Team>
            );
        });

        return teams;
    }

    return (
        <div className='teams'>
            {buildTeams()}
        </div>
    );
};

export default Teams;
