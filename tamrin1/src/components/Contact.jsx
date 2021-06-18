import React , {useState , useEffect} from 'react';
import { Style } from './styles/Contact.css';

const Contact = ({index,contact, contacts,setContacts, ...props}) => {
    const [isShowEdit, setIsShowEdit] = useState(false);
    const [onEditFullName, setOnEditFullName] = useState("");
    const [onEditEmail, setOnEditEmail] = useState("");
    const [onEditAddres, setOnEditAddres] = useState("");
    const [onEditPhon, setOnEditPhon] = useState("");

    const handleDelete = () => {
        let newContacts = contacts.filter((contInfo) => contInfo.email !== contacts[index].email);
        setContacts(newContacts);
        // console.log(contact.email);
    }
    const handlePast = () =>{
        let newContact = contacts;
        contacts[index] = {
            "fullName":onEditFullName,
            "email":onEditEmail,
            "phon":onEditAddres,
            "addres":onEditPhon
        };
        setContacts(newContact);
        setIsShowEdit(false);
    }
    
    return(
        <div className={"contactInfo"}>
            {isShowEdit ? <div>
                <input type="name" placeholder={contacts[index].fullName} onChange={(e)=>setOnEditFullName(e.target.value)} required/>
                <input type="email" placeholder={contacts[index].email} onChange={(e)=>setOnEditEmail(e.target.value)}  required/>
                <input type="address" placeholder={contacts[index].addres} onChange={(e)=>setOnEditAddres(e.target.value)}  required/>
                <input type="tel" placeholder={contacts[index].phon} onChange={(e)=> setOnEditPhon(e.target.value)} required/>
            </div> :<ul>
                <li>{contacts[index].fullName}</li>
                <li>{contacts[index].email}</li>
                <li>{contacts[index].addres}</li>
                <li>{contacts[index].phon}</li>
            </ul>}

            <button onClick={handleDelete}>DEL</button>
            <button onClick={() => setIsShowEdit(true)}>EDIT</button>
            <button onClick={handlePast} >PAST</button>
        </div>
    )
}
export default Contact;