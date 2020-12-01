//React Imports
import React, { useState } from 'react';
//Components
import AppBar from './AppBar';
import ActivitiesList from './ActivitiesList';
import ActivitiesModal from './ActivitiesModal';
//TS types
import { Activity } from '../types';



type Props = {
    activities: Activity[],
    resetActivities: () => void,
    saveActivity: (e: any) => void,
    eraseActivity: (e: any) => void,
    toggleActivityCheckmark: (e: any) => void
};

type ModalState = {
    isOpen: boolean,
    contains: null | Activity
};

const ActivitiesDashboard: React.FC<Props> = ( {activities, resetActivities, saveActivity, eraseActivity, toggleActivityCheckmark} ) => {
    const [modal, setModal] = useState<ModalState>( {isOpen: false, contains: null} );

    const addActivityModal = () => {
        setModal( {isOpen: true, contains: null} );
    }

    const activityDetailsModal = (e: any) => {
        const thisActivityID = Number(e.currentTarget.getAttribute('data-id'));
        const activity = activities.find( ( {id} ) => id === thisActivityID );
        if(activity) setModal( {isOpen: true, contains: activity} );
    }

    const closeModal = () => {
        setModal( {isOpen: false, contains: null} );
    }

    const disableResetButton = activities.filter(( {checked} ) => checked === true ).length > 0 ? false : true;

    return (
        <div>
            <AppBar disableResetButton={disableResetButton} resetActivities={resetActivities} addActivityModal={addActivityModal}/>
            <ActivitiesList activities={activities} activityDetailsModal={activityDetailsModal} eraseActivity={eraseActivity} toggleActivityCheckmark={toggleActivityCheckmark}/>
            <ActivitiesModal isOpen={modal.isOpen} contains={modal.contains} closeModal={closeModal} saveActivity={saveActivity} />
        </div>
    )
}

export default ActivitiesDashboard;