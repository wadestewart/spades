import React from 'react';
import ReactDOM from 'react-dom';

import RoundButton from './RoundButton';

describe('<RoundButton />', () => {
    it('renders without crashing', () => {
        const div = document.createElement('div');
        ReactDOM.render(<RoundButton text='test' />, div);
    });
});
