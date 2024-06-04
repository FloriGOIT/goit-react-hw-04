
import {Feedback} from "./Feedback/Feedback.jsx";
import { PhoneBook } from "./ThePhoneBook/PhoneBook.jsx";
import { ImageGallery } from "./ImageGallery/ImageGallery.jsx";
import { useState } from "react";

export const App = () => 
{ const [numberEx, setNumberEx] = useState(1)
  const increment = () =>{setNumberEx(prevNumberex => prevNumberex + 1);}
  return (<>
           {numberEx > 0 && numberEx < 3 && (<>
                               <button className="general" onClick={increment}> ⏭️
                               </button>
                               <br/> 
                             </>)}
           <Feedback number={numberEx}/>
           <PhoneBook number={numberEx}/>
           <ImageGallery number={numberEx}/>
          </>);
};
