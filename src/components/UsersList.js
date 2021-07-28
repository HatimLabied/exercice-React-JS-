
import Users from './Users'
import { useContext,useState } from 'react'
import { UserContext } from '../contexts/UserContext'
import { Modal,Button } from 'react-bootstrap'
import AddUser from './AddUser'

const UsersList = () => {
        
    const {users} = useContext(UserContext);
    
    const [show, setShow] = useState(false);
    
    const handleShow = () => setShow(true);
    const handleClose = () => setShow(false);

    return(
<>
<>
            
            
          
          
                        <table className="table table-striped table-hover">
                                    <thead>
                                        <tr>
                                            <th>ID</th>
                                            <th>Date de Création</th>
                                            <th>Etat</th>
                                            <th>Nom</th>
                                            <th>Prénom</th>
                                            <th>Nom de l'utilisateur</th>
                                            <th>Matricule</th>
                                            <th>Actions</th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        {
                                            users.map(users=>(
                                                <tr key={users.id}>
                                                    <Users users={users}/>
                                                </tr>

                                                
                                        ))
                                        }
                                      
                                    </tbody>
                        </table>

                        
        <Modal show={show} onHide={handleClose}>
                <Modal.Header closeButton>
                    <Modal.Title>
                        Add Employee
                    </Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <AddUser/>
                </Modal.Body>
                <Modal.Footer>
                        <Button variant="secondary" onClick={handleClose}>
                            Annuler
                        </Button>
                </Modal.Footer>
    </Modal>
    </>
    <>
    <div className="table-title">
				<div className="row">
					<div className="col-sm-6">
					</div>
					<div className="col-sm-6">
						<Button onClick={handleShow} className="btn btn-warning" data-toggle="modal"><i className="material-icons">&#xE147;</i> <span>Ajouter utilisateur</span></Button>					
					</div>
				</div>
			</div>
            
    </>
</>
    
    )
    
}

export default UsersList;