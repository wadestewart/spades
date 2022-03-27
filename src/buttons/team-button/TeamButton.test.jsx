import React from 'react';
import ReactDOM from 'react-dom';
import { fireEvent, render, screen } from '@testing-library/react';

import TeamButton from './TeamButton';

describe('<TeamButton />', () => {
    const props = {
        handleClick: jest.fn(),
        team: 0,
        text: "test"
    }

    it('renders without crashing', () => {
        const div = document.createElement('div');
        ReactDOM.render(<TeamButton />, div);
    });
    test('handles click event', () => {
        render(<TeamButton {...props} />);
        fireEvent.click(screen.getByText(props.text));
        expect(props.handleClick).toHaveBeenCalledTimes(1);
    });
});
