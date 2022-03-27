import React from 'react';
import ReactDOM from 'react-dom';
import { fireEvent, render, screen } from '@testing-library/react';

import Game from './Game';

describe('<Game />', () => {
    it('renders without crashing', () => {
        const div = document.createElement('div');
        ReactDOM.render(<Game />, div);
    });
    test('renders a team component', () => {
        render(<Game />);
        const button = screen.getAllByRole('button');
        fireEvent.click(button[0]);
        expect(screen.getByRole('listitem')).toBeInTheDocument();
    });
});
