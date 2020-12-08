//React Imports
import React from 'react';
import { Card, CardContent, TextField, Typography } from '@material-ui/core';
import EditActivityButton from '../button/MorphingButton';
import { EditActivityModalBodyProps } from '../../containers/modal/types';


class ModalEditBody extends React.Component<EditActivityModalBodyProps> {
    render() {
        return (
           <Card tabIndex={-1}>
                <CardContent>
                    <Typography>EDIT YOUR ACTIVITY AS YOU PLEASE!</Typography>
                    <form data-id={this.props.contains.id}>
                        <TextField label="Title" name="title" variant="outlined" placeholder={this.props.contains.title}/>
                        <TextField label="Text" name="text" variant="outlined" placeholder={this.props.contains.text}/>
                        <EditActivityButton kind="edit" action={this.props.action1} />
                    </form>
                </CardContent>
            </Card>
        );
    }
}

export default ModalEditBody;