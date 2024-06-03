
import { nanoid } from "nanoid"

export const ImageGaleryList = ({itemsListupload}) =>
{ 
   
    return (<ul>
               {itemsListupload !== null 
                   && 
                itemsListupload.map(elem => <li key={nanoid()}>
                                                 <img src={elem.webformatURL} alt={elem.tags}/>
                                            </li>)}
            </ul>)
}