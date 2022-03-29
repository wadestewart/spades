import React from 'react';
import ReactDOM from 'react-dom';

import TeamChoice from './TeamChoice';

describe('<TeamChoice />', () => {
    const props = {
        player: {
            name: 'Wade',
        },
    };
    
    it('renders without crashing', () => {
        const div = document.createElement('div');
        ReactDOM.render(<TeamChoice props={props} />, div);
    });
});
