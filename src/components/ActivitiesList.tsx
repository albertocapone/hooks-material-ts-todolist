//React Imports
import React from 'react';
import { makeStyles } from '@material-ui/styles';
import { Paper, Table, TableBody, TableCell, TableContainer, TableHead, TableRow } from '@material-ui/core';
//Components
import ActivityEntry from './ActivityEntry';
//TS types
import { Activity } from '../types';



type Props = {
    activities: Activity[],
    openModal: (e: any, kind: string) => void,
    eraseActivity: (e: any) => void,
    editActivity: (e: any) => void,
    toggleActivityCheckmark: (e: any) => void
};

const useStyles = makeStyles({
    table: {
        height: '100%',
        overflowY: 'auto'
    },
    checkedCol: {
        width: '1px'
    },
    emptyRow: {
        backgroundColor: 'black'
    }
})


const ActivitiesList: React.FC<Props> = ( { activities, openModal, editActivity, eraseActivity, toggleActivityCheckmark } ) => {
    
    const classes = useStyles();

    return (
        <TableContainer component={Paper}>
            <Table className={classes.table} stickyHeader >
                <TableHead>
                   <TableRow>
                        <TableCell className={classes.checkedCol}>{''}</TableCell>
                        <TableCell>Title</TableCell>
                        <TableCell>Text</TableCell>
                        <TableCell>Date</TableCell>
                        <TableCell align="right">Actions</TableCell>
                    </TableRow>
                </TableHead>
                <TableBody>
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
                </TableBody>
            </Table>
        </TableContainer>
    );
} 

export default ActivitiesList;