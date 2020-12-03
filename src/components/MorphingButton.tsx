//React Imports
import React from 'react';
//Material Imports
import { IconButton, Typography } from '@material-ui/core';
import ToCreateIcon from '@material-ui/icons/Add';
import ToEditIcon from '@material-ui/icons/Edit';
import EditIcon from '@material-ui/icons/Check';
import EraseIcon from '@material-ui/icons/Delete';
import ResetIcon from '@material-ui/icons/RemoveCircle';
import CreateIcon from '@material-ui/icons/Save';

type Props = {
    children?: string,
    kind: keyof typeof icons,
    disabled?: boolean,
    action: (e: any) => void
};


const icons = {
    "to-create": ToCreateIcon,
    "to-edit": ToEditIcon,
    "edit": EditIcon,
    "create": CreateIcon,
    "erase": EraseIcon,
    "reset": ResetIcon 
};


const MorphingButton: React.FC<Props> = ( {children, kind, action, disabled} ) => {
    const Icon = icons[kind];
    return (
        <Typography variant="button">
            <IconButton disabled={disabled} onClick={(e) => { e.stopPropagation(); action(e); } } color="secondary" children={<Icon />} /> 
        </Typography>
    );
}

export default MorphingButton;