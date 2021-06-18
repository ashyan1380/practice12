import React ,{useState} from 'react';
import Contact from './Contact';
import { Style } from './styles/Contacts.css';

const SearchResult=(searchText, contacts , setContacts) =>{
    const [searchResult, setSearchResult] = useState([]);
    const comparison = ()=>{
        contacts.map((contact, index) => {
            {contact.FullName.toLowerCase()=== searchResult.toLowerCase() && setSearchResult(contact)}
        })
    }
    return(
        <div className={"searchBar"}>
            {searchResult.map((contact , index) => {
                // console.log(index);
                return(<div key={index}>
                    <Contact 
                    // contact={contact} 
                    searchResult={searchResult} 
                    key={index} 
                    index={index} 
                    setSearchResult={setSearchResult}
                    // onClick={() => showInfo(index)}
                />
                </div>)
            })}
        </div>
    )
}
export default SearchResult;