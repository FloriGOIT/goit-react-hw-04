import css from "./PhoneBook.module.css"
import { FilterPhoneBook } from "./FilterPhoneBook"

export const ListPhoneBook = ({contactsForList}) =>
    {
      return(<div className={css.listPhonebook}>
                <h4>Contacts</h4>
                <FilterPhoneBook/>
                <ul>
                    {contactsForList.map((contact,index) => <li key={contact.id}>
                                                         <span><b>{index+1}. </b>{contact.name}: {contact.number} </span>
                                                         <button>Delete</button>
                                                    </li>)}
                </ul>
             </div>)
    
    }