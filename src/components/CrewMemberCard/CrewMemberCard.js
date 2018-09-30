import React from 'react';
import { Button, Card, Elevation } from '@blueprintjs/core';

import { Consumer } from '../../context/state';
 
const CrewMemberCard = (props) => (
    <Card interactive={true} elevation={Elevation.TWO}>
        <h5>{props.name.title} {props.name.first} {props.name.last}</h5>
        <p>{props.location.city}</p>
        
        <Consumer>
            {state => [
                <Button key="prev" onClick={() => state.updateStage(props.login.uuid, 'prev')}>Prev</Button>,
                <Button key="next" onClick={() => state.updateStage(props.login.uuid, 'next')}>Next</Button>
            ]}
        </Consumer>
    </Card>
);

export default CrewMemberCard;