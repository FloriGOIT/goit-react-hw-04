import { createContext } from "react"
import { ImageGalleryItems } from "./3ImageGalleryItems"
import PropTypes from "prop-types"
import css from "./ZZZgallery.module.css"

export const ListContext = createContext()

export const ImageGalleryList = ({itemsListupload, largeImg}) =>
{ return(<ListContext.Provider value={{itemsListupload, largeImg}}>
            <ul className={css.listWrapper}>
               <ImageGalleryItems/>
            </ul>
        </ListContext.Provider>)}



ImageGalleryList.propType = {itemsListupload: PropTypes.arrayOf(PropTypes.object),
                             largeImg: PropTypes.func}
