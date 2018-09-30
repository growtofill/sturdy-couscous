import React from 'react';
import { FormGroup, InputGroup } from '@blueprintjs/core';

import { Consumer } from '../../context/state';
 
const Filters = (props) => (
    <Consumer>
        {state => [
            <FormGroup
                key="name"
                label="Name"
                labelFor="name-input"
            >
                <InputGroup id="name-input" defaultValue={state.filters.name} />
            </FormGroup>,
            <FormGroup
                key="city"
                label="City"
                labelFor="city-input"
            >
                <InputGroup id="city-input" defaultValue={state.filters.city} />
            </FormGroup>
        ]}
    </Consumer>
);

export default Filters;