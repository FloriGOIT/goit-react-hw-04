import { useState, useEffect } from "react";
import { ContactInputPhoneBook } from "./PhoneBookComponents/ContactInputPhoneBook.jsx";
import {ListPhoneBook} from "./PhoneBookComponents/ListPhoneBook"
import css from "./PhoneBookComponents/PhoneBook.module.css";
import { FilterPhoneBook } from "./PhoneBookComponents/FilterPhoneBook.jsx"


export const PhoneBook = () =>
{  
   const storedContacts = () => {const stored = localStorage.getItem("Contact List:"); 
                                 return stored ? JSON.parse(stored) : [];}       
   const [filterInput, setFilterInput] = useState("");
   const [contactS, setContactS] = useState(storedContacts());

   useEffect(() => {const listToString= JSON.stringify(contactS); 
                    localStorage.setItem("Contact List:", listToString)}
                    ,[contactS])

   const handleNewContact = (futureContact) => {let duplicates = contactS.some(contact => contact.name === futureContact.name );
                                                if(duplicates){alert("You already have this contact in your list.")}
                                                else{const newAgenda = [...contactS, futureContact];
                                                setContactS(newAgenda)}}                                        
   const handleFiltering = (input) => {setFilterInput(input);}

   const handleDelete = (itemByID) => {const filteredContactList = contactS.filter(el => el.id !== itemByID);
                                       setContactS(filteredContactList);}

  return(<div className={css.phonebook}>
            <h2>Phonebook</h2>
            <ContactInputPhoneBook addContact={handleNewContact}/>
            {contactS.length === 0 && <h3>No contacts in your list </h3>}
            {contactS.length !== 0 && <ListPhoneBook contactsList={contactS} filter={filterInput} deleteElem={handleDelete}>
                <FilterPhoneBook bringFilterInput={handleFiltering}/>
            </ListPhoneBook>}
        </div>)

}