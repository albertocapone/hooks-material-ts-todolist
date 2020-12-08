//React
import React from 'react';
//Material
import Modal from '@material-ui/core/Modal/Modal';
import { makeStyles } from '@material-ui/styles';
//Components - Bodies
import getBody from './modalBodySwitch';


const useStyles = makeStyles({
    modal: {
        "& > div:nth-child(3)": {
        position: "absolute",
        top: `50%`,
        left: `50%`,
        transform: `translate(-50%, -50%)`,
        minWidth: 400,
        border: "2px solid #000",
        }
    }
})

type IProps = {
    kind: null | "create" | "edit" | "details",
    isOpen: boolean,
    contains: ActivityDetails | null,
    closeModal: () => void,
    action1?: { (e: any) : void } | null
};

const MorphingModal: React.FC<IProps> = (props) => {
    
    const {isOpen, contains, kind, closeModal, action1} = props;
    
    const Body: any = getBody(kind);

    const classes = useStyles();

    return (
        <Modal open={isOpen} onClose={closeModal} className={classes.modal}>
            {kind ? 
            <Body 
            contains={contains} 
            action1={action1} 
            />
            : 
            <></> 
            }
        </Modal>
    );
}

export default MorphingModal;