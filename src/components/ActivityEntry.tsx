import React from 'react';
import {default as EraseActivityButton} from './MorphingButton';

type Props = {
    key: number,
    title: String,
    text: String
};

const ActivityEntry: React.FC<Props> = ( {title, text} ) => {
    return (
        <li>
            <input type='checkbox'/>
            <h4>{title}</h4>
            <p>{text}</p>
            <EraseActivityButton kind="erase-activity">ERASE ACTIVITY</EraseActivityButton>
        </li>
    );
}

export default ActivityEntry;