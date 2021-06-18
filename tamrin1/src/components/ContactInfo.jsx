import React,{useState} from 'react';
import Contacts from './Contacts';

const ContactInfo = ({index, contacts , setContacts}) => {

    // console.log(index);
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
    // console.log(contacts.contacts[index]);
    // console.log(typeof index);

    return(
        <div className={"contactInfo"}>
            {isShowEdit ? <form>
                <input type="name" placeholder={contacts[index].fullName} onChange={(e)=>setOnEditFullName(e.target.value)} required/>
                <input type="email" placeholder={contacts[index].email} onChange={(e)=>setOnEditEmail(e.target.value)}  required/>
                <input type="address" placeholder={contacts[index].addres} onChange={(e)=>setOnEditAddres(e.target.value)}  required/>
                <input type="tel" placeholder={contacts[index].phon} onChange={(e)=> setOnEditPhon(e.target.value)} required/><br></br>
            <button onSubmit={handlePast} >PAST</button>
            </form> :<ul>
                <li>{contacts[index].fullName}</li>
                <li>{contacts[index].email}</li>
                <li>{contacts[index].addres}</li>
                <li>{contacts[index].phon}</li>
            </ul>}

            <button onClick={handleDelete}>DEL</button>
            <button onClick={() => setIsShowEdit(true)}>EDIT</button>
            
        </div>
    )
}
export default ContactInfo;