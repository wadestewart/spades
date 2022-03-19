import React from 'react';
import ReactDOM from 'react-dom';
import { render, screen } from '@testing-library/react';

import Player from './Player';
import Card from '../card/Card';

describe('<Player />', () => {
    it('renders without crashing', () => {
        const div = document.createElement('div');
        ReactDOM.render(<Player />, div);
    });
    test('renders a Card component', () => {
        const props = {
            hand: <Card suit='hearts' value='3'/>,
            id: 1,
        };
        render(<Player {...props} />);
        expect(screen.getByAltText('3 of hearts')).toBeInTheDocument();
    });
});
