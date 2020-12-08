//React
import React from 'react';
//Material
import { Card, CardContent, TextField, Typography } from '@material-ui/core';
import { makeStyles } from '@material-ui/styles';
//Containers
import CreateActivityButton from '../button/MorphingButton';
//Types
import { CreateActivityModalBodyProps } from '../../containers/modal/types';


class ModalCreateBody extends React.Component<CreateActivityModalBodyProps> {
    render() {
        return (
            <Card tabIndex={-1}>
                <CardContent>
                    <Typography>CREATE A NEW ACTIVITY!</Typography>
                    <form>
                        <TextField label="Title" name="title" variant="outlined" />
                        <TextField label="Text" name="text" variant="outlined" />
                        <CreateActivityButton kind="create" action={this.props.action1} />
                    </form>
                </CardContent>
            </Card>
        );
    }
}

export default ModalCreateBody;