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
    <div class="row">
    <div class="col">
    <Form.Group>
        ID
        <Form.Control
              type="text"
              name="num"
              value={num}
              onChange = { (e) => onInputChange(e)}
              required
              style={{'borderRadius':'10px'}}
        />
    </Form.Group>
    </div>
{/*  Date*/ }
<div class="col">
    <Form.Group>
    Date de Création
        <Form.Control
              type="date"
              name="date"
              value={date}
              onChange = { (e) => onInputChange(e)}
              required
              style={{'borderRadius':'10px'}}
        />
    </Form.Group>
    </div>
{/*  Etat*/ }
<div class="col">
    <Form.Group>
    Etat
        <Form.Control
             type="select"
             name="etat"
             value={etat}
             onChange = { (e) => onInputChange(e)}
             required
             style={{'borderRadius':'10px'}}
        />
    </Form.Group>
    </div>
    <div class="w-100"></div>
{/*  Nom*/ }
<div class="col">
    <Form.Group>
    Nom
        <Form.Control
              type="text"
              name="nom"
              value={nom}
              onChange = { (e) => onInputChange(e)}
              required
              style={{'borderRadius':'10px'}}
        />
    </Form.Group>
   </div>
{/*  Prénom*/ }
<div class="col">
    <Form.Group>
    Prénom
        <Form.Control
              type="text"
              name="prenom"
              value={prenom}
              onChange = { (e) => onInputChange(e)}
              required
              style={{'borderRadius':'10px'}}
        />
    </Form.Group>
    </div>
    <div class="col">
    </div >
    <div class="w-100"></div>
{/*  use*/ }

<div class="col">
    <Form.Group>
    Nom de l'utilisateur
        <Form.Control
              type="text"
              name="use"
              value={use}
              onChange = { (e) => onInputChange(e)}
              required
              style={{'borderRadius':'10px'}}
        />
    </Form.Group>
    </div >
    <div class="col">
    {/*  Matricule*/ }
    <Form.Group>
    Matricule 
        <Form.Control
              type="text"
              name="matricule"
              value={matricule}
              onChange = { (e) => onInputChange(e)}
              required
              style={{'borderRadius':'10px'}}
        />
    </Form.Group>
    </div>

    <div class="col">
    </div >

    </div>
    
    <div class="row">
 <div class="col-12 col-md-8"></div>
    <div class="col-6 col-md-4">
        <Button variant="warning" type="submit" block style={{'borderRadius':'10px','backgroundColor':"#ffaa0a"}}>
        Enregiter
    </Button></div>
    
    </div>
</Form>
)
}
 export default AddUser;