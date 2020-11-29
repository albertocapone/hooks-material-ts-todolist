//React Imports
import React, { useState } from 'react';
//Components
import ActivitiesDashboard from '../components/ActivitiesDashboard';
//TS types
import { Activity } from '../types';

const ActivitiesMaster: React.FC = () => {

    const [activities, setActivities] = useState<Activity[]>([]);

    return (
        <ActivitiesDashboard activities={activities} />
    );
}


export default ActivitiesMaster;