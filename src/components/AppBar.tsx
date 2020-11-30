//React Imports
import React from 'react';
import {default as EraseAllButton} from './MorphingButton';
import {default as AddActivityButton} from './MorphingButton';

const AppBar: React.FC = () => {
    return (
        <header>
            <h2>MY NOTES</h2>
            <EraseAllButton kind="erase-all">ERASE ALL! </EraseAllButton>
            <AddActivityButton kind="add-activity">ADD ACTIVITY</AddActivityButton>
        </header>
    );
}

export default AppBar;