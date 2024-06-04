import { SearchBar } from "./ImageGaleryComponents/1SearchBar";
import { ImageGalleryList } from "./ImageGaleryComponents/2ImageGalleryList";
import { AddButton } from "./ImageGaleryComponents/AddButton";
import { Loader } from "./ImageGaleryComponents/Loader";
import {Modal} from "./ImageGaleryComponents/Modal.jsx"
import css from "./ImageGaleryComponents/ZZZgallery.module.css";
import { useState, useEffect } from "react";
import PropTypes from "prop-types"

export const ImageGallery = ({number}) =>
{
  const [basicSite, setBasicSite] = useState("");
  const [pageNr, setPageNr] = useState(1);
  const [itemsList, setItemsList] = useState([]);
  const [error, setError] = useState("There seems to be an issue with the link, please check.");
  const [loading, setLoading] = useState(true);
  const [largeImg, setLargeImg] = useState("");

  const handleSearch = (basic) => {setBasicSite(basic); setPageNr(1); setItemsList([]); };
  const handlePageChange = () => {setPageNr(prevPageNr => prevPageNr + 1); };
  const handleLargeImg = (largeImageURL) => {setLargeImg(largeImageURL)}
  const handleCloseModal = (elem) => {if(elem === "DIV"){setLargeImg("")}}

  
   
  useEffect(()=>
    { 
      if (!basicSite) return;
      const fetching = () =>
        {setLoading(true);
         const site = `${basicSite}&page=${pageNr}`;
         fetch(site).then((res) => {if(!res.ok){alert(error)}
                                   else{return res.json()}})
                   .then((data) => {const newHit = data.hits;
                                    const arreyNewHit = newHit.map(({id, tags , webformatURL, largeImageURL}) => {return {id, tags , webformatURL, largeImageURL}});
                                    let list = [...itemsList, ...arreyNewHit];
                                    setItemsList(list); setLoading(false);})
                   .catch((error) => {setError(error);setLoading(false);})
        }
      fetching();
    },[error,itemsList, basicSite, pageNr])

  if(number === 3)
  {return (<div className={css.gallery}>
              <SearchBar inputSearch={handleSearch}/>
              <ImageGalleryList itemsListupload={itemsList} largeImg={handleLargeImg}/>
              {itemsList.length !== 0 && <AddButton addNewItems={handlePageChange}/>}
              {loading && <Loader />}
              {largeImg && <Modal largeImgInfo={largeImg} closeModal={handleCloseModal}/>}
          </div>)}
}  

ImageGallery.propType = {number: PropTypes.number}