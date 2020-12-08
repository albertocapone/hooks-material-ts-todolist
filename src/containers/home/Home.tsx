//React 
import React, { useState, useEffect } from 'react';
//Material
import { Box, MuiThemeProvider, CssBaseline } from '@material-ui/core';
import { makeStyles } from '@material-ui/styles';
import theme from '../../theme';
//Components
import Header from '../../components/home/Header';
import ActivitiesList from '../../components/home/ActivitiesList';
//Containers
import MorphingModal from '../modal/MorphingModal';
//Types
import { ModalState } from '../modal/types';


const useStyles = makeStyles({
    dashboard: {
        backgroundColor: '#fafafa',
        boxShadow: '-1px 10px 13px -1px rgba(0,0,0,0.79)',
        width: '90%',
        minHeight: '120px',
        maxHeight: '400px',
        borderRadius: "25px",
        overflow: 'hidden'
    }
});


const Home: React.FC = () => {
    
    const classes = useStyles();

    /* State */
    const [activities, setActivities] = useState<ActivityDetails[]>([]);

    const [modal, setModal] = useState<ModalState>( {isOpen: false, kind: null, contains: null, action1: null } );
    /* --- */


    /* Modal actions */
    const openModal = (e: any, kind: string) => {
        switch(kind) {
            case 'create': 
            {
                setModal( {isOpen: true, kind, contains: null, action1: createActivity } );
                break;
            } 
            case 'edit': 
            {
                const thisActivityID = Number(e.currentTarget.closest('li').getAttribute('data-id'));
                const activity = activities.find( ( {id} ) => id === thisActivityID );
                if(activity) setModal( {isOpen: true, kind, contains: activity, action1: editActivity } );
                break;
            } 
            case 'details': 
            {
                const thisActivityID = Number(e.currentTarget.getAttribute('data-id'));
                const activity = activities.find( ( {id} ) => id === thisActivityID );
                if(activity) setModal( {isOpen: true, kind, contains: activity, action1: null } );
                break;
            }
        }
    }

    const closeModal = () => {
        setModal( {isOpen: false, kind: null, contains: null, action1: null } );
    }
    /* ----------------- */



    /* Activity actions */
    const createActivity = (e: any) => {
        const parentWithData = e.currentTarget.closest('form');
        

        const newActivity = {
            id: Date.now(),
            title: parentWithData.elements.title.value || "Title",
            text: parentWithData.elements.text.value || "Text",
            checked: false
        };

        setActivities(activities.concat(newActivity));
    }

    const editActivity = (e: any) => {

        const parentWithData = e.currentTarget.closest('form');

        const thisActivityID = Number(parentWithData.getAttribute('data-id'));
        const editedTitle = parentWithData.elements.title.value || "Title";
        const editedText = parentWithData.elements.text.value || "Text";

        const editedActivities = activities.map( ( activity ) => {
            if(activity.id === thisActivityID) return {...activity, title: editedTitle, text: editedText};
            else return {...activity};
        });
        
        setActivities(editedActivities);
    }

    const eraseActivity = (e: any) => {  
        const thisActivityID = Number(e.currentTarget.closest('li').getAttribute('data-id'));
        const filteredActivities = activities.filter( ( {id} ) => id !== thisActivityID );
        setActivities(filteredActivities);
    }

    const resetActivities = () => {
        const filteredActivities = activities.filter( ( {checked} ) => checked === false );
        setActivities(filteredActivities);
    }

    const toggleActivityCheckmark = (e: any) => {
        const thisActivityID = Number(e.currentTarget.closest('li').getAttribute('data-id'));
        const checkmarkedActivities = activities.map( ( activity ) => {
            if(activity.id === thisActivityID) return {...activity, checked: !activity.checked};
            else return {...activity};
        });
        setActivities(checkmarkedActivities);
    }
    /* ----------- */



    /* Lifecycles || Effects */

    //cDm: il componente simula una chiamata API estraendo eventuali note dal localstorage
    useEffect(() => {
        const data: string | null = window.localStorage.getItem('activities');
        const parsedData: ActivityDetails[] | [] = data ? JSON.parse(data) : [];
        if(parsedData.length > 0) {  
            setActivities(parsedData);
        }
    }, []);

    //cDu: il componente salva i dati nel localstorage ad ogni update IFF activities è stato modificato
    useEffect(() => {
        const data: string = JSON.stringify(activities);
        window.localStorage.setItem('activities', data);
    }, [activities]);

    //cDu: ogni volta che le activities vengono aggiornate se la modale è aperta viene chiusa
    useEffect(() => {
        if(modal.isOpen) closeModal();
    }, [activities] );
    
    /* ---------------- */ 


    return (
       <MuiThemeProvider theme={theme}>

            <CssBaseline />   

            <Box className={classes.dashboard} display="flex" flexDirection="column">

                <Header 
                disableResetButton={activities.filter(( {checked} ) => checked === true ).length > 0 ? false : true} 
                resetActivities={resetActivities} 
                openModal={openModal}
                />

                <ActivitiesList 
                activities={activities} 
                openModal={openModal} 
                editActivity={editActivity} 
                eraseActivity={eraseActivity} 
                toggleActivityCheckmark={toggleActivityCheckmark}
                />

            </Box>

            <MorphingModal 
            isOpen={modal.isOpen} 
            kind={modal.kind} 
            contains={modal.contains} 
            action1={modal.action1} 
            closeModal={closeModal} 
            />
        
        </MuiThemeProvider>
    );
}


export default Home;