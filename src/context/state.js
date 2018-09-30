import React from 'react';

const defaultState = {
    filters: {
        name: '',
        city: ''
    },
    stages: {}
};

const { Provider, Consumer } = React.createContext(defaultState);

export {
    Provider,
    Consumer,
    defaultState
};
