//React Imports
import React from 'react';
//Components
import EraseActivityButton from './MorphingButton';
import ToEditActivityButton from './MorphingButton';


type Props = {
    id: number,
    title: string,
    text: string,
    checked: boolean,
    openModal: (e: any, kind: string) => void,
    editActivity: (e: any) => void,
    eraseActivity: (e: any) => void,
    toggleActivityCheckmark: (e: any) => void
};


const ActivityEntry: React.FC<Props> = ( {id, title, text, checked, openModal, editActivity, eraseActivity, toggleActivityCheckmark} ) => {

    return (
        <li data-id={id} onClick={ (e) => openModal(e, 'details')}>
            <input type='checkbox' checked={checked} onChange={toggleActivityCheckmark} onClick={(e) => { e.stopPropagation(); }} />
            <h4>{title}</h4>
            <p>{text}</p>
            <EraseActivityButton kind="erase" action={eraseActivity}>ERASE ACTIVITY</EraseActivityButton>
            <ToEditActivityButton  kind="to-edit" action={(e) => openModal(e, 'edit')}></ToEditActivityButton>
        </li>
    );
}

export default ActivityEntry;