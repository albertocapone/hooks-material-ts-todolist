//React
import React from 'react';
import { Grid, Typography, Hidden } from '@material-ui/core';
import { makeStyles } from  '@material-ui/styles';
//Components
import EraseActivityButton from '../button/MorphingButton';
import ToEditActivityButton from '../button/MorphingButton';
//Types
import { ActivityEntryProps } from '../../containers/home/types';


const useStyles = makeStyles({
    entry: {
        padding: '5px 15px',
        borderBottom: '1px dotted lightgray'
    },
    buttonGroup: {
        display: 'flex',
        justifyContent: 'space-between'
    }
});


const ActivityEntry: React.FC<ActivityEntryProps> = (props)  => {

    const {id, title, text, checked, openModal, eraseActivity, toggleActivityCheckmark} = props;

    const classes = useStyles();
    
    return (
        <Grid item container alignItems="center" component="li" className={classes.entry} data-id={id} onClick={ (e: any) => openModal(e, 'details')} >
            <Grid item xs={1} sm={1} md={1}>
                 <input type='checkbox' checked={checked} onChange={toggleActivityCheckmark} onClick={(e) => { e.stopPropagation(); }} />
            </Grid>
            <Grid item xs={5} sm={4} md={2}>
                <Typography variant="h6"> 
                    {title.length > 12 ? title.substr(0, 12) + "[...]" : title}
                </Typography>
            </Grid>
            <Hidden only={['xs', 'sm']}>
                <Grid item md={4}>
                    <Typography variant="subtitle1"> 
                        {text.length > 15 ? text.substr(0, 15) + "[...]" : text}
                    </Typography>
                </Grid>
            </Hidden>
            <Hidden only={['xs']}>
            <Grid item sm={3} md={2}>
                <Typography variant="subtitle2"> 
                    {new Date(id).toLocaleDateString('it')}
                </Typography>
            </Grid>
            </Hidden>
            <Grid item xs={6} sm={4} md={2}>
                <EraseActivityButton kind="erase" action={eraseActivity}/>
                <ToEditActivityButton  kind="to-edit" action={(e) => openModal(e, 'edit')}/>
            </Grid>
        </Grid>
    );
}

export default ActivityEntry;