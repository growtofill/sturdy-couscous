import React from 'react';

import { Provider, defaultState } from '../../context/state';

class StateProvider extends React.Component {
    state = defaultState;

    render() {
        return (
            <Provider value={this.state}>
                {this.props.children}
            </Provider>
        );
    }
}

export default StateProvider;