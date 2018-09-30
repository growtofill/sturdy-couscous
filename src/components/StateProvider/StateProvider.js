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

        let initialState = defaultState;

        try {
            const storedStateJson = sessionStorage.getItem('CREW_APP');
            if (storedStateJson) {
                initialState = JSON.parse(storedStateJson);
            }
        } catch (_) {}

        this.state = {
            ...initialState,
            updateFilter: (key, value) => {
                this.setState(prevState => ({
                    ...prevState,
                    filters: {
                        ...prevState.filters,
                        [key]: value
                    }
                }), () => {
                    sessionStorage.setItem('CREW_APP', JSON.stringify({
                        filters: this.state.filters,
                        stages: this.state.stages
                    }));
                });
            },
            updateStage: (uuid, dir) => {
                this.setState(prevState => ({
                    ...prevState,
                    stages: {
                        ...prevState.stages,
                        [uuid]: nextStage(prevState.stages[uuid], dir)
                    }
                }), () => {
                    sessionStorage.setItem('CREW_APP', JSON.stringify({
                        filters: this.state.filters,
                        stages: this.state.stages
                    }));
                });
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