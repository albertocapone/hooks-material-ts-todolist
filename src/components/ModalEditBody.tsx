//React Imports
import React from 'react';
import { Card, CardContent, TextField, Typography } from '@material-ui/core';
import EditActivityButton from './MorphingButton';
import { Activity } from '../types';

type Props = {
    contains: Activity,
    edit: (e: any) => void
}

class ModalEditBody extends React.Component<Props> {
    render() {
        return (
           <Card tabIndex={-1}>
                <CardContent>
                    <Typography>EDIT YOUR ACTIVITY AS YOU PLEASE!</Typography>
                    <form data-id={this.props.contains.id}>
                        <TextField label="Title" name="title" variant="outlined" placeholder={this.props.contains.title}/>
                        <TextField label="Text" name="text" variant="outlined" placeholder={this.props.contains.text}/>
                        <EditActivityButton kind="edit" action={this.props.edit} />
                    </form>
                </CardContent>
            </Card>
        );
    }
}

export default ModalEditBody;