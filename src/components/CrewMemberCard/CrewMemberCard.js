import React from 'react';
import { Button, Card, Elevation } from '@blueprintjs/core';
 
const CrewMemberCard = (props) => (
    <Card interactive={true} elevation={Elevation.TWO}>
        <h5>{props.name.title} {props.name.first} {props.name.last}</h5>
        <p>{props.location.city}</p>
        <Button>Left</Button>
        <Button>Right</Button>
    </Card>
);

export default CrewMemberCard;