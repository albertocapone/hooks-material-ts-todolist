//React Imports
import React, { useState, useEffect } from 'react';
//Components
import AppBar from './AppBar';
import ActivitiesList from './ActivitiesList';
import MorphingModal from './MorphingModal';
//TS types
import { Activity } from '../types';



type Props = {
    activities: Activity[],
    resetActivities: () => void,
    createActivity: (e: any) => void,
    editActivity: (e: any) => void,
    eraseActivity: (e: any) => void,
    toggleActivityCheckmark: (e: any) => void
};

type ModalState = {
    isOpen: boolean,
    kind: "none" | "create" | "edit" | "details",
    contains: null | Activity
};

const ActivitiesDashboard: React.FC<Props> = ( {activities, resetActivities, createActivity, editActivity, eraseActivity, toggleActivityCheckmark} ) => {
    const [modal, setModal] = useState<ModalState>( {isOpen: false, kind: 'none', contains: null} );

    useEffect(() => {
        if(modal.isOpen) closeModal();
    }, [activities]);

    const openModal = (e: any, kind: string) => {
        switch(kind) {
            case 'create': 
            {
                setModal( {isOpen: true, kind, contains: null} );
                break;
            } 
            case 'edit': 
            {
                const thisActivityID = Number(e.currentTarget.closest('li').getAttribute('data-id'));
                const activity = activities.find( ( {id} ) => id === thisActivityID );
                if(activity) setModal( {isOpen: true, kind, contains: activity} );
                break;
            } 
            case 'details': 
            {
                const thisActivityID = Number(e.currentTarget.getAttribute('data-id'));
                const activity = activities.find( ( {id} ) => id === thisActivityID );
                if(activity) setModal( {isOpen: true, kind, contains: activity} );
                break;
            }
        }
    }

    const closeModal = () => {
        setModal( {isOpen: false, kind: 'none', contains: null} );
    }

    const disableResetButton = activities.filter(( {checked} ) => checked === true ).length > 0 ? false : true;

    return (
        <div>
            <AppBar disableResetButton={disableResetButton} resetActivities={resetActivities} openModal={openModal}/>
            <ActivitiesList activities={activities} openModal={openModal} editActivity={editActivity} eraseActivity={eraseActivity} toggleActivityCheckmark={toggleActivityCheckmark}/>
            <MorphingModal isOpen={modal.isOpen} kind={modal.kind} contains={modal.contains} closeModal={closeModal} createActivity={createActivity} editActivity={editActivity}/>
        </div>
    )
}

export default ActivitiesDashboard;