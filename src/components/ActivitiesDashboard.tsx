//React Imports
import React, { useState, useEffect } from 'react';
import { Grid, Box, MuiThemeProvider, CssBaseline } from '@material-ui/core';
import { makeStyles } from '@material-ui/styles';
import theme from '../theme';
//Components
import Header from './Header';
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

const useStyles = makeStyles({
    dashboard: {
        backgroundColor: '#fafafa',
        width: '85%',
        maxHeight: '400px',
        border: `5px solid black`,
        borderRadius: "25px",
        overflow: 'hidden'
    }
});

const ActivitiesDashboard: React.FC<Props> = ( {activities, resetActivities, createActivity, editActivity, eraseActivity, toggleActivityCheckmark} ) => {

    const classes = useStyles();

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
                const thisActivityID = Number(e.currentTarget.closest('tr').getAttribute('data-id'));
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
        <MuiThemeProvider theme={theme}>
            <CssBaseline />
            <Box className={classes.dashboard} display="flex" flexDirection="column">
                <Header disableResetButton={disableResetButton} resetActivities={resetActivities} openModal={openModal}/>
                <ActivitiesList activities={activities} openModal={openModal} editActivity={editActivity} eraseActivity={eraseActivity} toggleActivityCheckmark={toggleActivityCheckmark}/>
            </Box>
            <MorphingModal isOpen={modal.isOpen} kind={modal.kind} contains={modal.contains} closeModal={closeModal} createActivity={createActivity} editActivity={editActivity}/>
        </MuiThemeProvider>
    )
}

export default ActivitiesDashboard;