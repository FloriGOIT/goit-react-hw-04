import { useContext } from "react"
import { ListContext } from "./2ImageGaleryList"
import css from "./ZZZgallery.module.css"
import { nanoid } from "nanoid"

export const ImageGaleryItems = () =>
    { 
       const {itemsListupload, largeImg} = useContext(ListContext);

       return (itemsListupload.map(elem => <li key={nanoid()}  className={css.listItem} onClick={()=> largeImg(elem.largeImageURL)}>
                                             <img src={elem.webformatURL} alt={elem.tags}/>
                                           </li>)) 
    } 