//React
import React from 'react';
//Material
import { Box, Typography } from '@material-ui/core';
import { makeStyles } from '@material-ui/styles';
//Components
import ResetButton from '../button/MorphingButton';
import ToCreateActivityButton from '../button/MorphingButton';
//Types
import { HeaderProps } from '../../containers/home/types';


const useStyles = makeStyles({
    header: {
        backgroundImage: 'linear-gradient(345deg, purple, #a73fb6)',
        height: '100px',
        borderBottom: '4px solid red',
        borderRadius: '20px'
    },
    buttonGroup: {
        height: '30px',
    }
});

const Header: React.FC<HeaderProps> = (props) => {

    const {resetActivities, openModal, disableResetButton} = props;

    const classes = useStyles();

    return (
        <Box component="header" display="flex" alignItems="end" className={classes.header} p={4}>

            <Typography variant="h3">MY NOTES</Typography>

            <Box display="flex" marginLeft="auto" justifyContent="space-between" className={classes.buttonGroup}>

                <ResetButton 
                disabled={disableResetButton} 
                kind="reset" 
                action={resetActivities}
                />

                <ToCreateActivityButton 
                kind="to-create" 
                action={ (e) => openModal(e, 'create') }
                />

            </Box>

        </Box>
    );
}

export default Header;