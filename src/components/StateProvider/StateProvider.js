import React from 'react';

import { Provider, defaultState } from '../../context/state';

const nextStage = (stage = 'applied', dir) => {
    switch (`${stage}->${dir}`) {
        case 'interviewing->prev':
            return 'applied';
        case 'applied->next':
        case 'hired->prev':
            return 'interviewing';
        case 'interviewing->next':
            return 'hired';
        default:
            return stage;
    }
};

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
            },
            updateStage: (uuid, dir) => {
                this.setState(prevState => ({
                    ...prevState,
                    stages: {
                        ...prevState.stages,
                        [uuid]: nextStage(prevState.stages[uuid], dir)
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
export {
    nextStage
};