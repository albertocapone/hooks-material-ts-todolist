//React Imports
import React from 'react';
//Material Imports
import { Card, CardContent, Typography } from '@material-ui/core';
//TS types
import { ActivityDetailsModalBodyProps } from '../../containers/modal/types';



class ModalDetailsBody extends React.Component<ActivityDetailsModalBodyProps> {  //un componente funzionale generava warning - material modal vuole come children solo componenti che supportano ref
    render() {
        return (
            <Card tabIndex={-1}>
                <CardContent>
                    <Typography variant="h5" component="h2" gutterBottom>TITLE</Typography>
                    <Typography>{this.props.contains.title}</Typography>
                    <Typography>TEXT</Typography>
                    <Typography variant="body2" component="p">{this.props.contains.text}</Typography>
                </CardContent>
            </Card>
        );
    }
}

export default ModalDetailsBody;