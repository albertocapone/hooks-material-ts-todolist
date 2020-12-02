//React Imports
import React from 'react';
//Components
import EraseAllButton from './MorphingButton';
import ToCreateActivityButton from './MorphingButton';



type Props = {
    resetActivities: () => void,
    openModal: (e: any, kind: string) => void
    disableResetButton: boolean
};

const AppBar: React.FC<Props> = ( {resetActivities, openModal, disableResetButton} ) => {
    return (
        <header>
            <h2>MY NOTES</h2>
            <EraseAllButton disabled={disableResetButton} kind="reset" action={resetActivities}>ERASE ALL!</EraseAllButton>
            <ToCreateActivityButton kind="to-create" action={ (e) => openModal(e, 'create')}>ADD ACTIVITY</ToCreateActivityButton>
        </header>
    );
}

export default AppBar;