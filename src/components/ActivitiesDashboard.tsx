//React Imports
import React, { useState } from 'react';
//Components
import AppBar from './AppBar';
import ActivitiesList from './ActivitiesList';
import ActivitiesModal from './ActivitiesModal';
//TS types
import { Activity } from '../types';

type Props = {
    activities: Activity[]
};

type ModalState = {
    isOpen: boolean,
    contains: null | Activity
};

const ActivitiesDashboard: React.FC<Props> = ( {activities} ) => {
    const [modal, setModal] = useState<ModalState>( {isOpen: false, contains: null} );
    return (
        <div>
            <AppBar />
            <ActivitiesList activities={activities} />
            {modal.isOpen && <ActivitiesModal contains={modal.contains}/>}
        </div>
    )
}

export default ActivitiesDashboard;