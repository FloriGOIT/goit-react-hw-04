import { useState } from "react";
import { ContactPhoneBook } from "./PhoneBookComponents/ContactPhoneBook";
import {ListPhoneBook} from "./PhoneBookComponents/ListPhoneBook"
import css from "./PhoneBookComponents/PhoneBook.module.css";



export const PhoneBook = () =>
{
   const [contactS] = useState([{id: 'id-1', name: 'Rosie Simpson', number: '459-12-56'},
                                             {id: 'id-2', name: 'Hermione Kline', number: '443-89-12'},
                                             {id: 'id-3', name: 'Eden Clements', number: '645-17-79'},
                                             {id: 'id-4', name: 'Annie Copeland', number: '227-91-26'},])

  return(<div className={css.phonebook}>
            <h2>Phonebook</h2>
            <ContactPhoneBook/>
            <ListPhoneBook contactsForList={contactS}/>
        </div>)

}