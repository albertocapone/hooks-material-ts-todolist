//React
import React from 'react';
//Material
import { IconButton, Typography } from '@material-ui/core';
//Components - Icons
import getIcon from './buttonIconSwitch';

type IProps = {
    kind: "to-create" | "create" | "to-edit" | "edit" | "erase" | "reset",
    disabled?: boolean,
    action: (e: any) => void
};

const MorphingButton: React.FC<IProps> = (props)  => {

    const {kind, action, disabled} = props;

    const Icon: any = getIcon(kind);

    return (
        <IconButton disabled={disabled} onClick={(e) => { e.stopPropagation(); action(e); } } color="secondary" children={<Icon />} /> 
    );
}

export default MorphingButton;