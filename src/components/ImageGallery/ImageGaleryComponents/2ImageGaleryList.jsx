import { createContext } from "react"
import { ImageGaleryItems } from "./3ImageGaleryItems"
import css from "./ZZZgallery.module.css"

export const ListContext = createContext()

export const ImageGaleryList = ({itemsListupload, largeImg}) =>
{ return(<ListContext.Provider value={{itemsListupload, largeImg}}>
            <ul className={css.listWrapper}>
               <ImageGaleryItems/>
            </ul>
        </ListContext.Provider>)}


