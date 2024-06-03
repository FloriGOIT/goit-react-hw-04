import { useContext } from "react"
import { ListContext } from "./2ImageGalleryList"


import css from "./ZZZgallery.module.css"
import { nanoid } from "nanoid"

export const ImageGalleryItems = () =>
    { 
       const {itemsListupload, largeImg} = useContext(ListContext);

       return (itemsListupload.map(elem => <li key={nanoid()}  className={css.listItem} onClick={()=> largeImg(elem.largeImageURL)}>
                                             <img src={elem.webformatURL} alt={elem.tags} loading="lazy"/>
                                           </li>)) 
    } 

