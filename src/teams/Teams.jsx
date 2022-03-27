import React from 'react';
import Team from '../team/Team';

/**
 * @summary This component will handle parsing the players into teams
 *  based on the button they press
 */
const Teams = props => {
    /**
     * @summary this method builds out two teams
     *  based on the click event and the users' choices
     */
    const buildTeams = () => {
        const teams = props.teamPlayers.map(teamPlayer => {
            // set team one based on user selection
            if (teamPlayer.team === 0) {
                const id = 1;
                const teamOne = [];
                teamOne.push(teamPlayer.player);

                return (
                    <Team key={id} id={id}>
                        <h3>Team #{id}</h3>
                        {teamOne}
                    </Team>
                );
            }

            // set team two
            const id = 2;
            const teamTwo = [];
            teamTwo.push(teamPlayer.player);
            return (
                <Team key={id} id={id}>
                    <h3>Team #{id}</h3>
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
