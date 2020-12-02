//React Imports
import React, { useState, useEffect } from 'react';
//Components
import ActivitiesDashboard from '../components/ActivitiesDashboard';
//TS types
import { Activity } from '../types';



const ActivitiesMaster: React.FC = () => {

    const [activities, setActivities] = useState<Activity[]>([]);
    
    //cDm: il componente simula una chiamata API estraendo eventuali note dal localstorage
    useEffect(() => {
        const data: string | null = window.localStorage.getItem('activities');
        const parsedData: Activity[] | [] = data ? JSON.parse(data) : [];
        if(parsedData.length > 0) {  
            setActivities(parsedData);
        }
    }, []);

    //cDu: il componente salva i dati nel localstorage ad ogni update IFF activities è stato modificato
    useEffect(() => {
        const data: string = JSON.stringify(activities);
        window.localStorage.setItem('activities', data);
    }, [activities]);

    const resetActivities = () => {
        const filteredActivities = activities.filter( ( {checked} ) => checked === false );
        setActivities(filteredActivities);
    }

    const eraseActivity = (e: any) => {   
        const thisActivityID = Number(e.currentTarget.closest('li').getAttribute('data-id'));
        const filteredActivities = activities.filter( ( {id} ) => id !== thisActivityID );
        setActivities(filteredActivities);
    }

    const createActivity = (e: any) => {
        const newActivity = {
            id: Date.now(),
            title: e.currentTarget.closest('form').elements.title.value,
            text: e.currentTarget.closest('form').elements.text.value,
            checked: false
        };
        setActivities(activities.concat(newActivity));
    }

    const editActivity = (e: any) => {

        const editedActivityID = Number(e.currentTarget.closest('form').getAttribute('data-id'));
        const editedTitle =  e.currentTarget.closest('form').elements.title.value;
        const editedText = e.currentTarget.closest('form').elements.text.value;

        const editedActivities = activities.map( ( {id, title, text, checked} ) => {
            if(id === editedActivityID) return {id, title: editedTitle, text: editedText, checked};
            else return {id, title, text, checked};
        });
        
        setActivities(editedActivities);
    }

    const toggleActivityCheckmark = (e: any) => {
        const thisActivityID = Number(e.currentTarget.closest('li').getAttribute('data-id'));
        const checkmarkedActivities = activities.map( ( {id, title, text, checked} ) => {
            if(id === thisActivityID) return {id, title, text, checked: !checked};
            else return {id, title, text, checked};
        });
        setActivities(checkmarkedActivities);
    }

    return (
        <ActivitiesDashboard activities={activities} resetActivities={resetActivities} editActivity={editActivity} createActivity={createActivity} eraseActivity={eraseActivity} toggleActivityCheckmark={toggleActivityCheckmark}/>
    );
}


export default ActivitiesMaster;