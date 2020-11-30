import React from 'react';
import { Activity } from '../types';

type Props = {
    contains: Activity | null
};

const ActivitiesModal: React.FC<Props> = ( {contains} ) => {
    return (
        <div>You can see me now, I'm the modal! {contains}</div>
    );
}

export default ActivitiesModal;