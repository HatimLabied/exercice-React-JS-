import { UserContext } from "../contexts/UserContext";
import { useContext } from "react";
import { Button } from "react-bootstrap";

const Users = ({users}) => {
    const {deleteUser} = useContext(UserContext)
    return(
    <>
        
        <td>{users.num}</td>
        <td>{users.date}</td>
        <td>{users.etat}</td>
        <td>{users.nom}</td>
        <td>{users.prenom}</td>
        <td>{users.use}</td>
        <td>{users.matricule}</td>
        <td>
            <a onClick={() => deleteUser(users.id)}  className="delete" data-toggle="modal"><i className="material-icons" data-toggle="tooltip" title="Delete">&#xE872;</i></a>
        </td>
        

    </>

    )
}

export default Users;