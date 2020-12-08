//React
import React from 'react';
//Material
import { Box, Card, CardContent, CardActionArea, TextField, Typography, CardActions } from '@material-ui/core';
import { styled } from '@material-ui/styles';
//Containers
import CreateActivityButton from '../button/MorphingButton';
//Types
import { CreateActivityModalBodyProps } from '../../containers/modal/types';

const MultilineText = styled(TextField)({
    maxHeight: '200px',
    overflowY: 'auto',
    marginTop: '5px'
});

class ModalCreateBody extends React.Component<CreateActivityModalBodyProps> {
    render() {
        return (
            <Card tabIndex={-1}>
                <CardContent>
                    <Typography variant="h6" gutterBottom>Create a new activity!</Typography>
                    <Box component="form" display="flex" flexDirection="column" justifyContent="space-between">
                        <TextField label="Title" name="title" variant="filled" />
                        <MultilineText label="Text" multiline={true} name="text" variant="filled"/>
                    <CardActionArea>
                        <CardActions>
                            <CreateActivityButton kind="create" action={this.props.action1} />
                        </CardActions>
                    </CardActionArea>
                    </Box>
                </CardContent>
            </Card>
        );
    }
}

export default ModalCreateBody;