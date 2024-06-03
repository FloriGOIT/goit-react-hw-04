import css from "./ZZZgallery.module.css"
import PropTypes from "prop-types"


export const Modal = ({largeImgInfo, closeModal}) =>
{ 
   const handleCloseModal = (e) => {const elem = e.target.tagName;
                                    closeModal(elem);}

  return (<div className={css.largeimageWrapper} onClick={handleCloseModal}>
               <img src={largeImgInfo} alt="largeImage"/>
          </div>)
}

Modal.propType = {largeImgInfo: PropTypes.string,
                  closeModal: PropTypes.func}