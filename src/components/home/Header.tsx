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
        backgroundImage: 'linear-gradient(345deg, #5e0a5e, #882c95)',
        height: '85px',
        boxShadow: '0px 5px 17px 2px rgba(245,44,44,0.86)',
        borderRadius: '20px',
        "& > h4": {
            color: 'rgb(27 25 25 / 75%)',
            fontWeight: 'bolder'
        },
    },
    buttonGroup: {
        height: '30px',
    }
});

const Header: React.FC<HeaderProps> = (props) => {

    const {resetActivities, openModal, disableResetButton} = props;

    const classes = useStyles();

    return (
        <Box component="header" display="flex" alignItems="center" className={classes.header} p={2}>

            <Typography variant="h4">MY NOTES</Typography>

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