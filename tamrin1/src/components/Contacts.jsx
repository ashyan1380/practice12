import React , { useState,useEffect } from 'react';
import AddNewContact from './AddNewContact';
import Contact from './Contact';
import ContactInfo from './ContactInfo';
import SearchResult from './SearchResult';
import { Style } from './styles/Contacts.css';
const Contacts = () =>{
    const [contacts, setContacts] = useState([
        {
            "fullName":"fatemeh",
            "email":"user1@gmail.com",
            "phon":"011111111",
            "addres":"yazd"
        },
        {
            "fullName":"maryam",
            "email":"user2@gmail.com",
            "phon":"022222222",
            "addres":"kerman"
        },
        {
            "fullName":"zahra",
            "email":"user3@gmail.com",
            "phon":"03333333333",
            "addres":"tehran"
        },
        {
            "fullName":"shahnaz",
            "email":"user4@gmail.com",
            "phon":"0444444444",
            "addres":"rasht"
        }
    ]);
    // index of contact
    const [indexUserActive, setIndexUserActive] = useState(0);
    const [userInfo, setUserInfo] = useState();
    const [showAddContact, setShowAddContact] = useState(false);
    const [showSearch, setShowSearch] = useState(false);
    const [searchText, setSearchText] = useState("");
    useEffect(() => {
        setUserInfo(<ContactInfo
            contacts={contacts}
            index={indexUserActive}
            setContacts={setContacts}
        />);
        // setUserInfo(<ContactInfo index={indexUserActive} contacts={contacts}/>)
        // <div>userInfo</div>
    }, [indexUserActive])
    // console.log(indexUserActive);
    return(
        <div className={"Contacts"}>
            <form>
                <input placeholder={"search contact"} onChange={(e)=>setSearchText(e.target.value)}/>
                <button onClick={()=>setShowSearch(true)}>🔍</button>
            </form>
            <div className={"contactList"}>
            {showSearch ?<SearchResult seachText={searchText} contacts={contacts} setContacts={setContacts} /> :contacts.map((contact , index) => {
                // console.log(index);
                return(<div onClick={() => setIndexUserActive(index)} key={index}>
                    <Contact 
                    // contact={contact} 
                    contacts={contacts} 
                    key={index} 
                    index={index} 
                    setContacts={setContacts}
                    // onClick={() => showInfo(index)}
                />
                </div>)
            })}
            </div>
            <button  className={"addContact"} onClick={()=> setShowAddContact(true)}>+</button>
            <br/>
            {showAddContact && <AddNewContact contacts={contacts} setContacts={contacts}/>}
            {/* <div><ContactInfo/></div> */}
                <div>{userInfo}</div>
        </div>
    )
}
export default Contacts;