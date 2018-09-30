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
                <InputGroup
                    id="name-input"
                    value={state.filters.name}
                    onChange={event => state.updateFilter('name', event.target.value)}
                />
            </FormGroup>,
            <FormGroup
                key="city"
                label="City"
                labelFor="city-input"
            >
                <InputGroup
                    id="city-input"
                    value={state.filters.city}
                    onChange={event => state.updateFilter('city', event.target.value)}
                />
            </FormGroup>
        ]}
    </Consumer>
);

export default Filters;