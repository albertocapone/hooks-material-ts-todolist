//React Imports
import React from 'react';
//Material Imports
import { Box, Card, CardContent, TextField, Typography } from '@material-ui/core';
import { styled } from '@material-ui/styles';
//TS types
import { ActivityDetailsModalBodyProps } from '../../containers/modal/types';

const MultilineText = styled(TextField)({
    maxHeight: '200px',
    overflowY: 'auto',
    marginTop: '5px'
});


class ModalDetailsBody extends React.Component<ActivityDetailsModalBodyProps> {  //un componente funzionale generava warning - material modal vuole come children solo componenti che supportano ref
    render() {
        return (
            <Card tabIndex={-1}>
               <CardContent>
                    <Typography variant="h6" gutterBottom>Activity Details</Typography>
                    <Box display="flex" flexDirection="column" justifyContent="space-between" data-id={this.props.contains.id} >
                        <TextField label="Title" name="title" variant="filled" defaultValue={this.props.contains.title} disabled/>
                        <MultilineText label="Text" name="text" multiline={true} variant="filled" defaultValue={this.props.contains.text} disabled/>
                    </Box>
                </CardContent>
            </Card>
        );
    }
}

export default ModalDetailsBody;