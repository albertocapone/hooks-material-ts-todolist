//React Imports
import React from 'react';
import { Activity } from '../types';
import ActivityEntry from './ActivityEntry';

type Props = {
    activities: Activity[]
};

const ActivitiesList: React.FC<Props> = ( { activities } ) => {
    return (
        <ul>
            {(activities.length > 0) ? activities.map( ({id, title, text}) => <ActivityEntry key={id} title={title} text={text}/>)  : "No activities yet!" }
        </ul>
    );
} 

export default ActivitiesList;