//Modal Bodies
import DetailsBody from '../../components/modal/DetailsActivity';
import CreateBody from '../../components/modal/CreateActivity';
import EditBody from '../../components/modal/EditActivity';


const getBody = (kind:  null | "create" | "edit" | "details") => {
    
    let body;

    switch (kind) {
    
        case 'create':
            body = CreateBody;
            break;
    
        case 'edit': 
            body = EditBody;
            break;
    
        case 'details':
            body = DetailsBody;
            break;
    }

    return body;
}

export default getBody;