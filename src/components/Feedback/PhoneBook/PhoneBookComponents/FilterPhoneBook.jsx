import css from "./PhoneBook.module.css"

export const FilterPhoneBook = () =>
    {
        return(<div className={css.filterPhonebook}>
                    <label htmlFor="filterId">Find contacts by name</label>
                    <input type="text" id="filterId"/>
              </div>)
    
    }