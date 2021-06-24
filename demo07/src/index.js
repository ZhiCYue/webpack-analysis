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

    loadComponent() {
        import('./text.js').then((Text) => {
            this.setState({
                Text: Text.default
            });
        });
    }

    render() {
        const { Text } = this.state;
        return (
            <div>
                {
                    Text ? <Text /> : null
                }
                <button onClick={ this.loadComponent.bind(this) } >click</button>
            </div>
        );
    }
}

ReactDOM.render(
    <Demo />,
    document.getElementById('root')
);