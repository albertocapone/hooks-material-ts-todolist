//React Imports
import React from 'react';
//Material Imports
import { Button } from '@material-ui/core';
import NewIcon from '@material-ui/icons/Add';
import EraseIcon from '@material-ui/icons/Delete';
import ResetIcon from '@material-ui/icons/RemoveCircle';
import SaveIcon from '@material-ui/icons/Save';

type Props = {
    children?: string,
    kind: keyof typeof icons,
    disabled?: boolean,
    action: (e: any) => void
};


const icons = {
    "add": <NewIcon />,
    "erase": <EraseIcon />,
    "reset": <ResetIcon />,
    "save": <SaveIcon />
    
};


const MorphingButton: React.FC<Props> = ( {children, kind, action, disabled} ) => {
    return (
        <Button disabled={disabled} onClick={(e) => { e.stopPropagation(); action(e); } } variant="contained" color="primary" startIcon={icons[kind]}>{children}</Button>
    );
}

export default MorphingButton;