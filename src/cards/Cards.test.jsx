import React from 'react';
import ReactDOM from 'react-dom';
import { render, screen } from '@testing-library/react';

import Cards from './Cards';

describe('<Routing />', () => {
    it('renders without crashing', () => {
        const div = document.createElement('div');
        ReactDOM.render(<Cards />, div);
    });

    test('renders Navbar', () => {
        render(<Cards />);
        const cardsListElement = screen.getByRole('list');
        expect(cardsListElement).toBeInTheDocument();
    });
});
