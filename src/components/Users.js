import { UserContext } from "../contexts/UserContext";
import { useContext } from "react";


const Users = ({users}) => {
    const statusFilter = (status) => {
        switch (status) {
            case "Validé":
                return "green";
               
                case "Rejeté":
                return "red";
                case "En validation":
                return "yellow";
        
            default:
                break;
        }
    }
    const {deleteUser} = useContext(UserContext)
    return(
    <>
        
        <td>{users.num}</td>
        <td>{users.date}</td>
        <td style = {{backgroundColor : statusFilter(users.etat)}} >{users.etat}</td>
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