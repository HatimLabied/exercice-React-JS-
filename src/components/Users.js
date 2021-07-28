
const Users = ({users}) => {
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
            <a href="#deleteUserModal" className="delete" data-toggle="modal"><i className="material-icons" data-toggle="tooltip" title="Delete">&#xE872;</i></a>
        </td>
        

    </>

    )
}

export default Users;