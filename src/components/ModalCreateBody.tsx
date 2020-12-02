//React Imports
import React from 'react';
import { Card, CardContent, TextField, Typography } from '@material-ui/core';
import CreateActivityButton from './MorphingButton';
import { Activity } from '../types';

type Props = {
    contains: Activity,
    create: (e: any) => void
}

class ModalCreateBody extends React.Component<Props> {
    render() {
        return (
            <Card tabIndex={-1}>
                <CardContent>
                    <Typography>CREATE A NEW ACTIVITY!</Typography>
                    <form>
                        <TextField label="Title" name="title" variant="outlined" />
                        <TextField label="Text" name="text" variant="outlined" />
                        <CreateActivityButton kind="create" action={this.props.create} />
                    </form>
                </CardContent>
            </Card>
        );
    }
}

export default ModalCreateBody;