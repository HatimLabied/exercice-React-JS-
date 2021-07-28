import {createContext,  useState} from 'react';
import { v4 as uuidv4 } from 'uuid';


export const UserContext = createContext()

const UserContextProvider  = (props) => {

    const [users,setUsers] = useState([
        {id:uuidv4(), num: '123456789', date: '01/06/2021', etat: 'En validation', nom: 'Mohamed', prenom: 'Taha', use: 'mtaha', matricule: '2584'},
        {id:uuidv4(), num: '987654321', date: '25/07/2021', etat: 'Validé', nom: 'Hamid', prenom: 'Orrich', use: 'horrich', matricule: '1594'},
        {id:uuidv4(), num: '852963741', date: '15/09/2021', etat: 'Rejeté', nom: 'Rachid', prenom: 'Mahidi', use: 'rmahidi', matricule: '3576'},
        
])

const addUsers = (num, date, etat, nom ,prenom ,use ,matricule ) => {
    setUsers([...users , {id:uuidv4(), num, date, etat, nom ,prenom ,use ,matricule}])
}


const deleteUser = (id) => {
    setUsers(users.filter(users => users.id !== id))
}


    return (
        <UserContext.Provider value={{users,addUsers,deleteUser}}>
            {props.children}
        </UserContext.Provider>
    )
}

export default UserContextProvider;