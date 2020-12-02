//React Imports
import React from 'react';
//Material Imports
import Modal from '@material-ui/core/Modal/Modal';
//Components
import DetailsBody from './ModalDetailsBody';
import CreateBody from './ModalCreateBody';
import EditBody from './ModalEditBody';
//TS types
import { Activity } from '../types';


type Props = {
    kind: keyof typeof bodies,
    isOpen: boolean,
    contains: Activity | null,
    closeModal: () => void,
    createActivity: (e: any) => void,
    editActivity: (e: any) => void
};

const bodies = {
    "none": <div>Love u TS</div>,
    "create": CreateBody,
    "edit": EditBody,
    "details": DetailsBody
};

const MorphingModal: React.FC<Props> = ( {isOpen, contains, kind, closeModal, editActivity, createActivity} ) => {
    
    const Body: any = bodies[kind];

    return (
        <Modal open={isOpen} onClose={closeModal} >
            <Body contains={contains} create={createActivity} edit={editActivity}/>
        </Modal>
    );
}

export default MorphingModal;