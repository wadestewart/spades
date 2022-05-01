import React from 'react';
import ReactDOM from 'react-dom';

import PrimaryButton from './PrimaryButton';

describe('<RoundButton />', () => {
    it('renders without crashing', () => {
        const div = document.createElement('div');
        ReactDOM.render(<PrimaryButton text='test' />, div);
    });
});
