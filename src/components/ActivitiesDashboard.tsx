//React Imports
import React from 'react';
//Components
import { Activity } from '../types';

type Props = {
    activities: Activity[]
};

const ActivitiesDashboard: React.FC<Props> = ( {activities} ) => {
    return (
        <main>
            <h1>DASHBOARD</h1>
            {activities.length > 0 ? activities.map( ( {id, text} ) => <p key={id}>{text}</p> ) : "No activities!"}
        </main>
    )
}

export default ActivitiesDashboard;