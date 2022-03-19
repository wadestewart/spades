import React from 'react';
import ReactDOM from 'react-dom';
import { render, screen } from '@testing-library/react';

import Player from '../player/Player';
import Teams from './Teams';

describe('<Teams />', () => {
    const props = {
        teamPlayers: [<Player />],
        team: 0,
    }

    it('renders without crashing', () => {
        const div = document.createElement('div');
        ReactDOM.render(<Teams {...props} />, div);
    });
    test('renders a team component', () => {
        render(<Teams {...props} />);
        expect(screen.getByRole('list')).toBeInTheDocument();
    });
});
