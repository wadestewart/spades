import React from 'react';
import ReactDOM from 'react-dom';
import { render, screen } from '@testing-library/react';

import Player from './Player';

describe('<Player />', () => {
    it('renders without crashing', () => {
        const div = document.createElement('div');
        ReactDOM.render(<Player />, div);
    });
});
