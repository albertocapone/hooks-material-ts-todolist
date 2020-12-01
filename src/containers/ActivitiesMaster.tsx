//React Imports
import React, { useState } from 'react';
//Components
import ActivitiesDashboard from '../components/ActivitiesDashboard';
//TS types
import { Activity } from '../types';



const ActivitiesMaster: React.FC = () => {

    const [activities, setActivities] = useState<Activity[]>([ {id: 1, title: 'Prima!', text: 'Lorem ipsum et nove amenitas...', checked: false} ]);

    const toggleActivityCheckmark = (e: any) => {
        const thisActivityID = Number(e.currentTarget.closest('li').getAttribute('data-id'));
        const checkmarkedActivities = activities.map( ( {id, title, text, checked} ) => {
            if(id === thisActivityID) return {id, title, text, checked: !checked};
            else return {id, title, text, checked};
        });
        setActivities(checkmarkedActivities);
    }

    const resetActivities = () => {
        const filteredActivities = activities.filter( ( {checked} ) => checked === false );
        setActivities(filteredActivities);
    }

    const eraseActivity = (e: any) => {   
        const thisActivityID = Number(e.currentTarget.closest('li').getAttribute('data-id'));
        const filteredActivities = activities.filter( ( {id} ) => id !== thisActivityID );
        setActivities(filteredActivities);
    }

    const saveActivity = (e: any) => {
        const newActivity = {
            id: Date.now(),
            title: e.currentTarget.closest('form').elements.title.value,
            text: e.currentTarget.closest('form').elements.text.value,
            checked: false
        };
        setActivities(activities.concat(newActivity));
    }

    return (
        <ActivitiesDashboard activities={activities} resetActivities={resetActivities} saveActivity={saveActivity} eraseActivity={eraseActivity} toggleActivityCheckmark={toggleActivityCheckmark}/>
    );
}


export default ActivitiesMaster;