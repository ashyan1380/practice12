import React , {useState, useEffect} from 'react';

const AddNewContact = (contacts, setContacts) => {
    const [onEditFullName, setOnEditFullName] = useState("");
    const [onEditEmail, setOnEditEmail] = useState("");
    const [onEditAddres, setOnEditAddres] = useState("");
    const [onEditPhon, setOnEditPhon] = useState("");
    const handlePast = () =>{
        let newContact = contacts;
        contacts[contacts.length] = {
            "fullName":onEditFullName,
            "email":onEditEmail,
            "phon":onEditAddres,
            "addres":onEditPhon
        };
        setContacts(newContact);
        console.log(newContact);
        // setIsShowEdit(false);
    }
    return(
        <div className={"contactInfo"}>
            <form>
                <input onChange={(e)=> setOnEditFullName(e.target.value)} placeholder={"contact full name"} type={"text"} required/>
                <input onChange={(e)=> setOnEditEmail(e.target.value)} placeholder={"contact email"} type={"email"} required/>
                <input onChange={(e)=> setOnEditAddres(e.target.value)} placeholder={"contact addres"} type={"address"} required/>
                <input onChange={(e)=> setOnEditPhon(e.target.value)} placeholder={"contact phon"} type={"tel"} required/>
                <br/>
                <button onSubmit={handlePast}>Add</button>
            </form>
        </div>
    )
}
export default AddNewContact;