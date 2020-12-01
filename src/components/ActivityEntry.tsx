//React Imports
import React from 'react';
//Components
import {default as EraseActivityButton} from './MorphingButton';

type Props = {
    id: number,
    title: string,
    text: string,
    checked: boolean,
    activityDetailsModal: (e: any) => void,
    eraseActivity: (e: any) => void,
    toggleActivityCheckmark: (e: any) => void
};


const ActivityEntry: React.FC<Props> = ( {id, title, text, checked, activityDetailsModal, eraseActivity, toggleActivityCheckmark} ) => {
    return (
        <li data-id={id} onClick={activityDetailsModal}>
            <input type='checkbox' checked={checked} onChange={toggleActivityCheckmark} onClick={(e) => { e.stopPropagation(); }} />
            <h4>{title}</h4>
            <p>{text}</p>
            <EraseActivityButton kind="erase" action={eraseActivity}>ERASE ACTIVITY</EraseActivityButton>
        </li>
    );
}

export default ActivityEntry;