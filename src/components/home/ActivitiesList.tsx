//React
import React from 'react';
//Material
import { makeStyles } from '@material-ui/styles';
import { Box, Grid, Hidden } from '@material-ui/core';
//Components
import ActivityEntry from './ActivityEntry';
//Types
import { ActivitiesListProps } from '../../containers/home/types';


const useStyles = makeStyles({
    container: {
        height: 'calc(100% - 85px)'
    },
    listHead: {
        height: '40px',
        paddingTop: '10px',
        borderBottom: '1px solid lightgray'
    },
    list: {
        maxHeight: '200px',
        overflowY: 'auto',
    }
});

const ActivitiesList: React.FC<ActivitiesListProps> = (props) => {
    
    const { activities, openModal, editActivity, eraseActivity, toggleActivityCheckmark } = props;

    const classes = useStyles();

    return (
        <Grid container className={classes.container}>
            <Grid item container alignItems="center" className={classes.listHead}>
                    <Grid item xs={2} sm={1} md={1}>{''}</Grid>
                    <Grid item xs={5} sm={4} md={2}>Title</Grid>
                    <Hidden only={['xs', 'sm']}>
                         <Grid item md={4}>Text</Grid>
                    </Hidden>
                    <Hidden only={['xs']}>
                        <Grid item sm={3} md={2}>Date</Grid>
                    </Hidden>
                    <Grid item container xs={5} sm={4} md={2}>Actions</Grid>
            </Grid>
            <Grid item container component="ul" className={classes.list}>
                {(activities.length > 0) ? activities.map( ({id, title, text, checked}) => 
                        <ActivityEntry 
                        key={id} 
                        id={id} 
                        title={title} 
                        text={text} 
                        checked={checked} 
                        openModal={openModal} 
                        editActivity={editActivity}
                        eraseActivity={eraseActivity} 
                        toggleActivityCheckmark={toggleActivityCheckmark}
                        /> )  
                        : ""
                        }
            </Grid>
        </Grid>
    );
} 

export default ActivitiesList;

  
        