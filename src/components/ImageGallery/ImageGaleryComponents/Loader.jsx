//Loader.jsx

import css from "./ZZZgallery.module.css"
import { Blocks } from "react-loader-spinner"

export const Loader = () =>
{
  return(<div className={css.loaderWrapper}>  
            <Blocks height="400"  width="400"  color="#4fa94d"
            ariaLabel="blocks-loading"  wrapperStyle={{}}
            wrapperClass="blocks-wrapper" visible={true}  className={css.loader}/>
         </div>)
}