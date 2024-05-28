import css from "./PhoneBook.module.css"

export const ContactPhoneBook = () =>
    {
     return(<form className={css.contactPhonebook}>
                <label htmlFor="userName">Name</label>
                <input type="text"
                 name="name"
                 id="userName"
                 pattern="[A-Za-z]{2,}[A-Za-z\-\s]+"
                 title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan."
                 required/>

                <label htmlFor="phoneId">Number</label>
                <input type="tel"
                 name="number"
                 id="phoneId"
                 pattern="\+?\d{1,4}?[\-.\s]?\(?\d{1,3}?\)?[\-.\s]?\d{1,4}[\-.\s]?\d{1,4}[\-.\s]?\d{1,9}"
                 title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +, between 9-15 digits"
                 required/>

                <button type="button">Add new contact</button>
            </form>)
    
    }


    //temporary 