//Button Icons
import ToCreateIcon from '@material-ui/icons/Add';
import CreateIcon from '@material-ui/icons/Save';
import ToEditIcon from '@material-ui/icons/Edit';
import EditIcon from '@material-ui/icons/Check';
import EraseIcon from '@material-ui/icons/Delete';
import ResetIcon from '@material-ui/icons/RemoveCircle';


const getIcon = (kind: "to-create" | "create" | "to-edit" | "edit" | "erase" | "reset") => {
    
    let icon;
    
    switch (kind) {
    
        case 'to-create':
            icon = ToCreateIcon;
            break;

        case 'create':
            icon = CreateIcon;
            break;
    
        case 'to-edit': 
            icon = ToEditIcon;
            break;
    
        case 'edit':
            icon = EditIcon;
            break;
            
        case 'erase':
            icon = EraseIcon;
            break;

        case 'reset':
            icon = ResetIcon;
            break;
    }

    return icon;
}

export default getIcon;