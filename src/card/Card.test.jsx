import React from 'react';
import ReactDOM from 'react-dom';
import { render, screen } from '@testing-library/react';

import Card from './Card';

describe('<Card />', () => {
    const props = {
        suit: "spades",
        value: 'Ace',
        rank: 26,
        frontImg: './path/to/img',
    }

    it('renders without crashing', () => {
        const div = document.createElement('div');
        ReactDOM.render(<Card />, div);
    });
    test('passes correct url to img', () => {
        render(<Card {...props} />);
        const altString = `${props.value} of ${props.suit}`;
        const imgElement = screen.getByRole('img');
        expect(imgElement.alt).toContain(altString);
    });
});
