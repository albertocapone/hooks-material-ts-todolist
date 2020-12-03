//React Imports
import React from 'react';
import { Box, Typography } from '@material-ui/core';
import { makeStyles } from '@material-ui/styles';
//Components
import EraseAllButton from './MorphingButton';
import ToCreateActivityButton from './MorphingButton';



type Props = {
    resetActivities: () => void,
    openModal: (e: any, kind: string) => void
    disableResetButton: boolean
};

const useStyles = makeStyles({
    header: {
        backgroundImage: 'linear-gradient(345deg, purple, #a73fb6)',
        height: '130px',
        borderBottom: '4px solid red',
        borderRadius: '20px'
    },
    buttonGroup: {
        height: '30px',
    }
});

const Header: React.FC<Props> = ( {resetActivities, openModal, disableResetButton} ) => {
    const classes = useStyles();
    return (
        <Box component="header" display="flex" alignItems="end" className={classes.header} p={4}>
            <Typography variant="h3">MY NOTES</Typography>
            <Box display="flex" marginLeft="auto" justifyContent="space-between" className={classes.buttonGroup}>
                <EraseAllButton disabled={disableResetButton} kind="reset" action={resetActivities}/>
                <ToCreateActivityButton kind="to-create" action={ (e) => openModal(e, 'create')}/>
            </Box>
        </Box>
    );
}

export default Header;