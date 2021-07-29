import { UserContext } from "../contexts/UserContext";
import { useContext } from "react";


const Users = ({users}) => {
    const statusFilter = (status) => {
        switch (status) {
            case "Validé":
            case "validé":
            case "valide":
                return "#5BE881";
               
                case "Rejeté":
                return "#FF0000";
                case "En validation":
                case "en validation":
                case "envalidation":
                return "#FDB64D";
        
            default:
                break;
        }
    }
    const {deleteUser} = useContext(UserContext)
    return(
    <>
        
        <td>{users.num}</td>
        <td>{users.date}</td>
        <td><div style = {{backgroundColor : statusFilter(users.etat),'borderRadius':'15px','color':'white','font-size':'1.2em','text-align': 'center'}} >{users.etat}</div></td>
        <td>{users.nom}</td>
        <td>{users.prenom}</td>
        <td>{users.use}</td>
        <td>{users.matricule}</td>
        <td >
            <a onClick={() => deleteUser(users.id)}  className="delete" data-toggle="modal" ><i className="material-icons" data-toggle="tooltip" title="Delete" >&#xE872;</i></a>
        </td>
        

    </>

    )
}

export default Users;