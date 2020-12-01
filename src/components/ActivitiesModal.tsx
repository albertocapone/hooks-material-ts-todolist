//React Imports
import React from 'react';
//Material Imports
import Modal from '@material-ui/core/Modal/Modal';
import { Card } from '@material-ui/core';
//Components
import {default as SaveActivityButton} from './MorphingButton';
//TS types
import { Activity } from '../types';


type Props = {
    isOpen: boolean,
    contains: Activity | null,
    closeModal: () => void,
    saveActivity: (e: any) => void
};

const ActivitiesModal: React.FC<Props> = ( {isOpen, contains, closeModal, saveActivity} ) => {
    
    const handleSaveActivity = (e: any) => {
        saveActivity(e); 
        closeModal();
    }

    return (
        <Modal open={isOpen} onClose={closeModal} >
            <Card>
                <form onSubmit={(e) => e.preventDefault()}>
                    <label>
                        TITLE
                        <input type="text" name="title" placeholder={contains?.title} readOnly={contains ? true : false}/>
                    </label>
                    <label>
                        TEXT
                    <input type="textarea" name="text" placeholder={contains?.text} readOnly={contains ? true : false} />
                    </label>
                    {contains ? '' : <SaveActivityButton kind='save' action={handleSaveActivity}/>}
                </form>
            </Card>
        </Modal>
    );
}

export default ActivitiesModal;