import React from 'react';

import { Provider, defaultState } from '../../context/state';

class StateProvider extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            ...defaultState,
            updateFilter: (key, value) => {
                this.setState(prevState => ({
                    ...prevState,
                    filters: {
                        ...prevState.filters,
                        [key]: value
                    }
                }), () => console.debug(this.state));
            }
        }
    }

    render() {
        return (
            <Provider value={this.state}>
                {this.props.children}
            </Provider>
        );
    }
}

export default StateProvider;