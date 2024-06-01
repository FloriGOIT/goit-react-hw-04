import css from "./PhoneBook.module.css";
import { useState } from "react";
import { nanoid } from "nanoid";

export const ContactInputPhoneBook = ({addContact}) =>
    {
     const [nameIN, setNameIN] = useState("");
     const [numberIN, setNumberIN] = useState("");
     const handleInput = (e) => {let identifyInput = e.target.name;
                                 let input =  e.target.value;
                                 function upperFirstLetter(el){return el.toUpperCase()};
                                 function capitalize(string){return string.replace(/\b\w/g, upperFirstLetter)};
                                 let firstLetterUpperInput = capitalize(input);
                                 if(identifyInput === "name"){setNameIN(`${firstLetterUpperInput}`)}
                                 else if(identifyInput === "number"){setNumberIN(`${firstLetterUpperInput}`)};}

     const handleSubmit = (e) => {e.preventDefault();
                                  let newContact = {id:nanoid(), name:nameIN, number: numberIN};
                                  addContact(newContact);
                                  e.currentTarget.reset()}                            
   
     return(<form className={css.contactPhonebook} onSubmit={handleSubmit}>
                <label htmlFor="userName">Name</label>
                <input type="text"
                 name="name"
                 id="userName"
                 pattern="[A-Za-z]{2,}[A-Za-z\-\s]+"
                 title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan."
                 required onChange={handleInput} />

                <label htmlFor="phoneId">Number</label>
                <input type="tel"
                 name="number"
                 id="phoneId"
                 pattern="\+?\d{1,4}?[\-.\s]?\(?\d{1,3}?\)?[\-.\s]?\d{1,4}[\-.\s]?\d{1,4}[\-.\s]?\d{1,9}"
                 title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +, between 9-15 digits"
                 required onChange={handleInput}/>

                <button type="submit" >Add new contact</button>
            </form>)
    
    }


    //temporary 