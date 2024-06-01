import css from "./PhoneBook.module.css"


export const ListPhoneBook = ({contactsList, filter,deleteElem, children}) =>
    { let filteredList = contactsList.filter(elem => {return elem.name.toLowerCase().includes(filter.toLowerCase())});


      return(<div className={css.listPhonebook}>
                <h4>Contacts</h4>
                {children}
                <ul>
                    {filter === "" && contactsList.map((contact,index) => <li key={contact.id}>
                                                         <span><b>{index+1}. </b>{contact.name}: {contact.number} </span>
                                                         <button onClick={() => deleteElem(contact.id)}>Delete</button>
                                                    </li>)}
                     {filter !== "" && filteredList.map((contact,index) => <li key={contact.id}>
                                                         <span><b>{index+1}. </b>{contact.name}: {contact.number} </span>
                                                         <button onClick={() => deleteElem(contact.id)}>Delete</button>
                                                    </li>)}                               
                </ul>
             </div>)
    
    }