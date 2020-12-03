//React Imports
import React from 'react';
import { Grid, TableRow, TableCell, Typography } from '@material-ui/core';
import { makeStyles } from  '@material-ui/styles';
//Components
import EraseActivityButton from './MorphingButton';
import ToEditActivityButton from './MorphingButton';


type Props = {
    id: number,
    title: string,
    text: string,
    checked: boolean,
    openModal: (e: any, kind: string) => void,
    editActivity: (e: any) => void,
    eraseActivity: (e: any) => void,
    toggleActivityCheckmark: (e: any) => void
};

const useStyles = makeStyles({
    entry: {
        padding: '2px 5px',
        borderBottom: '1px dotted lightgray'
    },
    buttonGroup: {
        display: 'flex',
        justifyContent: 'space-between'
    }
});


const ActivityEntry: React.FC<Props> = ( {id, title, text, checked, openModal, eraseActivity, toggleActivityCheckmark} ) => {
    const classes = useStyles();
    return (
        <TableRow className={classes.entry} data-id={id} onClick={ (e: any) => openModal(e, 'details')} >
            <TableCell>
                 <input type='checkbox' checked={checked} onChange={toggleActivityCheckmark} onClick={(e) => { e.stopPropagation(); }} />
            </TableCell>
            <TableCell>
                <Typography variant="h6"> 
                    {title}
                </Typography>
            </TableCell>
            <TableCell>
                <Typography variant="subtitle1"> 
                    {text.substr(0, 15) + "[...]"}
                </Typography>
            </TableCell>
            <TableCell>
                <Typography variant="subtitle2"> 
                    {new Date(id).toLocaleDateString('it')}
                </Typography>
            </TableCell>
            <TableCell align="right">
                <EraseActivityButton kind="erase" action={eraseActivity}/>
                <ToEditActivityButton  kind="to-edit" action={(e) => openModal(e, 'edit')}/>
            </TableCell>
        </TableRow>
    );
}

export default ActivityEntry;