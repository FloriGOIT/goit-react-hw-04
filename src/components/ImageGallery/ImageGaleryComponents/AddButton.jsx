
import css from "./ZZZgallery.module.css"

export const AddButton = ({addNewItems}) =>
{
 return(<div className={css.addItemsWrapper}>
             <button type="button" className={css.addItemsBtn} onClick={addNewItems}>Add more items</button>
        </div>)
}