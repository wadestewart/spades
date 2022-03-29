import React from 'react';
import ReactDOM from 'react-dom';

import NameChoice from './NameChoice';

describe('<NameChoice />', () => {
    const props = {
        player: {
            name: 'Wade',
        },
    };
    it('renders without crashing', () => {
        const div = document.createElement('div');
        ReactDOM.render(<NameChoice props={props} />, div);
    });
});
