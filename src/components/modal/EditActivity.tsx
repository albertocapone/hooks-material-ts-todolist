//React
import React from 'react';
//Material
import { Box, Card, CardContent, CardActionArea, TextField, Typography, CardActions } from '@material-ui/core';
import { styled } from '@material-ui/styles';
//Components
import EditActivityButton from '../button/MorphingButton';
//Containers
import { EditActivityModalBodyProps } from '../../containers/modal/types';

const MultilineText = styled(TextField)({
    maxHeight: '200px',
    overflowY: 'auto',
    marginTop: '5px'
});

class ModalEditBody extends React.Component<EditActivityModalBodyProps> {
    render() {
        return (
           <Card tabIndex={-1}>
                <CardContent>
                    <Typography variant="h6" gutterBottom>Edit your activity!</Typography>
                    <Box component="form" display="flex" flexDirection="column" justifyContent="space-between" data-id={this.props.contains.id}>
                        <TextField label="Title" name="title" variant="filled" defaultValue={this.props.contains.title}/>
                        <MultilineText label="Text" name="text" multiline={true} variant="filled" defaultValue={this.props.contains.text}/>
                     <CardActionArea>
                        <CardActions>
                            <EditActivityButton kind="edit" action={this.props.action1} />
                        </CardActions>
                    </CardActionArea>
                    </Box>
                </CardContent>
            </Card>
        );
    }
}

export default ModalEditBody;