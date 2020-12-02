//React Imports
import React from 'react';
//Components
import ActivityEntry from './ActivityEntry';
//TS types
import { Activity } from '../types';



type Props = {
    activities: Activity[],
    openModal: (e: any, kind: string) => void,
    eraseActivity: (e: any) => void,
    editActivity: (e: any) => void,
    toggleActivityCheckmark: (e: any) => void
};


const ActivitiesList: React.FC<Props> = ( { activities, openModal, editActivity, eraseActivity, toggleActivityCheckmark } ) => {
    return (
        <ul>
            {(activities.length > 0) ? 
            activities.map( ({id, title, text, checked}) => 
                <ActivityEntry 
                key={id} 
                id={id} 
                title={title} 
                text={text} 
                checked={checked} 
                openModal={openModal} 
                editActivity={editActivity}
                eraseActivity={eraseActivity} 
                toggleActivityCheckmark={toggleActivityCheckmark}
                /> )  
            : "No activities yet!" 
            }
        </ul>
    );
} 

export default ActivitiesList;