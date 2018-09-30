import React from 'react';

const defaultState = {
    filters: {
        name: '',
        city: ''
    }
};

const { Provider, Consumer } = React.createContext(defaultState);

export {
    Provider,
    Consumer,
    defaultState
};
