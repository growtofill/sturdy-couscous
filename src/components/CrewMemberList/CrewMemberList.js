import React from 'react';

import { Consumer } from '../../context/state';
import CrewMemberCard from '../CrewMemberCard/CrewMemberCard';

const name = crewMember => `${crewMember.name.first} ${crewMember.name.last}`;
const city = crewMember => crewMember.location.city;
const uuid = crewMember => crewMember.login.uuid;

const CrewMemberList = (props) => (
    <Consumer>
        {state => props.crewMembers
            .filter(crewMember => (state.stages[uuid(crewMember)] || "applied") === props.stage)
            .filter(crewMember => name(crewMember).includes(state.filters.name))
            .filter(crewMember => city(crewMember).includes(state.filters.city))
            .map(crewMember => (
                <CrewMemberCard
                    key={uuid(crewMember)}
                    {...crewMember }
                />
            ))}
    </Consumer>
);

export default CrewMemberList;