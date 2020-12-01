//React Imports
import React from 'react';
//Components
import {default as EraseAllButton} from './MorphingButton';
import {default as AddActivityButton} from './MorphingButton';



type Props = {
    resetActivities: () => void,
    addActivityModal: () => void
    disableResetButton: boolean
};

const AppBar: React.FC<Props> = ( {resetActivities, addActivityModal, disableResetButton} ) => {
    return (
        <header>
            <h2>MY NOTES</h2>
            <EraseAllButton disabled={disableResetButton} kind="reset" action={resetActivities}>ERASE ALL!</EraseAllButton>
            <AddActivityButton kind="add" action={addActivityModal}>ADD ACTIVITY</AddActivityButton>
        </header>
    );
}

export default AppBar;