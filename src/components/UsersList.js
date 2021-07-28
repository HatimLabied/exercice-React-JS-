import React, { useState } from 'react'
import Users from './Users'

const UsersList = () => {
        
        const [users,setUsers] = useState([
        {id:1, num: '123456789', date: '01/06/2021', etat: 'En validation', nom: 'Mohamed', prenom: 'Taha', use: 'mtaha', matricule: '2584'},
        {id:2, num: '987654321', date: '25/07/2021', etat: 'Validé', nom: 'Hamid', prenom: 'Orrich', use: 'horrich', matricule: '1594'},
        {id:3, num: '852963741', date: '15/09/2021', etat: 'Rejeté', nom: 'Rachid', prenom: 'Mahidi', use: 'rmahidi', matricule: '3576'},
        ])

    return(

<>
            <div className="table-title">
				<div className="row">
					<div className="col-sm-6">
					</div>
					<div className="col-sm-6">
						<a href="#addUserModal" className="btn btn-warning" data-toggle="modal"><i className="material-icons">&#xE147;</i> <span>Ajouter utilisateur</span></a>					
					</div>
				</div>
			</div>
          
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
                                                <tr Key={users.id}>
                                                    <Users users={users}/>
                                                </tr>

                                                
                                        ))
                                        }
                                      
                                    </tbody>
                        </table>
    </>
    )
    
}

export default UsersList;