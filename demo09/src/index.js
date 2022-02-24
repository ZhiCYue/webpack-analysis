'use strict';

import React from 'react';
import ReactDOM from 'react-dom';

class Demo extends React.Component {

    constructor() {
        super(...arguments);

        this.state = {
            Text: null
        };
    }

    render() {
        return (
            <div>
                hello.
            </div>
        );
    }
}

ReactDOM.render(
    <Demo />,
    document.getElementById('root')
);