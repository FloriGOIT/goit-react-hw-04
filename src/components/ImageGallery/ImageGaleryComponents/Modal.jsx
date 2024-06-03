import css from "./ZZZgallery.module.css"


export const Modal = ({largeImgInfo, closeModal}) =>
{ 
   const handleCloseModal = (e) => {const elem = e.target.tagName;
                                    closeModal(elem);}

  if(largeImgInfo.length !== 0)
    {return (<div className={css.largeimageWrapper} onClick={handleCloseModal}>
               <img src={largeImgInfo} alt="largeImage"/>
          </div>)}
}