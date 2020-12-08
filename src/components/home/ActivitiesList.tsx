//React
import React from 'react';
//Material
import { makeStyles } from '@material-ui/styles';
import { Grid } from '@material-ui/core';
//Components
import ActivityEntry from './ActivityEntry';
//Types
import { ActivitiesListProps } from '../../containers/home/types';


const useStyles = makeStyles({
    container: {
        height: 'calc(100% - 100px)'
    },
    listHead: {
        height: '40px',
        border: '1px solid lightgray'
    },
    list: {
        height: 'calc(100% - 40px)',
        overflowY: 'auto',
        '& > div': {
            padding: '5px 10px'
        }
    }
});

const ActivitiesList: React.FC<ActivitiesListProps> = (props) => {
    
    const { activities, openModal, editActivity, eraseActivity, toggleActivityCheckmark } = props;

    const classes = useStyles();

    return (
        <div className={classes.container}>
            <Grid container alignItems="center" className={classes.listHead}>
                    <Grid item xs={1}>{''}</Grid>
                    <Grid item xs={2}>Title</Grid>
                    <Grid item xs={4}>Text</Grid>
                    <Grid item xs={2}>Date</Grid>
                    <Grid item xs={2}>Actions</Grid>
            </Grid>
            <Grid container component="ul" className={classes.list}>
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
        </div>
    );
} 

export default ActivitiesList;

  
        