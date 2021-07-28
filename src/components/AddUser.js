import { Form, Button } from "react-bootstrap"
import { UserContext } from "../contexts/UserContext";
import { useContext,useState } from "react";





const AddUser = () =>{
    const {addUsers} = useContext(UserContext);
    const [newUser, setNewUser] = useState({
        num:"", date:"", etat:"", nom:"" ,prenom :"",use:"" ,matricule:""
    });

const onInputChange = (e) => {
        setNewUser({...newUser,[e.target.name]: e.target.value})
    }

    const {num, date, etat, nom ,prenom ,use ,matricule} = newUser;

    const handleSubmit = (e) => {
        e.preventDefault();
        addUsers(num, date, etat, nom ,prenom ,use ,matricule);
    }


return(

    <Form onSubmit={handleSubmit} >
{/*  ID*/ }
    <Form.Group>
        <Form.Control
              type="text"
              placeholder="ID*"
              name="num"
              value={num}
              onChange = { (e) => onInputChange(e)}
              required
        />
    </Form.Group>
{/*  Date*/ }
    <Form.Group>
        <Form.Control
              type="text"
              placeholder="JJ/MM/AAAA *"
              name="date"
              value={date}
              onChange = { (e) => onInputChange(e)}
              required
        />
    </Form.Group>
{/*  Etat*/ }
    <Form.Group>
        <Form.Control
             type="text"
             placeholder="Etat *"
             name="etat"
             value={etat}
             onChange = { (e) => onInputChange(e)}
             required
        />
    </Form.Group>
{/*  Nom*/ }
    <Form.Group>
        <Form.Control
              type="text"
              placeholder="Nom *"
              name="nom"
              value={nom}
              onChange = { (e) => onInputChange(e)}
              required
        />
    </Form.Group>
{/*  Prénom*/ }
    <Form.Group>
        <Form.Control
              type="text"
              placeholder="Prénom *"
              name="prenom"
              value={prenom}
              onChange = { (e) => onInputChange(e)}
              required
        />
    </Form.Group>
{/*  use*/ }
    <Form.Group>
        <Form.Control
              type="text"
              placeholder="Nom de l'utilisateur *"
              name="use"
              value={use}
              onChange = { (e) => onInputChange(e)}
              required
        />
    </Form.Group>

    {/*  Matricule*/ }
    <Form.Group>
        <Form.Control
              type="text"
              placeholder="Matricule *"
              name="matricule"
              value={matricule}
              onChange = { (e) => onInputChange(e)}
              required
        />
    </Form.Group>




    <Button variant="warning" type="submit" block>
        Enregiter
    </Button>

</Form>
)
}
 export default AddUser;