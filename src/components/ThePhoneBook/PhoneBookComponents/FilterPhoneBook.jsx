import css from "./PhoneBook.module.css";

export const FilterPhoneBook = ({bringFilterInput}) =>
    {   
        const transmitFilterInput = (e) => {let input = e.target.value;
                                            bringFilterInput(input)}

        return(<div className={css.filterPhonebook} >
                    <label htmlFor="filterId">Find contacts by name</label>
                    <input type="text" id="filterId" onChange={transmitFilterInput} />
               </div>)
    
    }