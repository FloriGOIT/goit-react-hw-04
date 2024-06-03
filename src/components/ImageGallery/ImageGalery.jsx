import { SearchBar } from "./ImageGaleryComponents/1SearchBar";
import { ImageGaleryList } from "./ImageGaleryComponents/2ImageGaleryList";
import { AddButton } from "./ImageGaleryComponents/AddButton";
import { Loader } from "./ImageGaleryComponents/Loader";
import {Modal} from "./ImageGaleryComponents/Modal.jsx"
import css from "./ImageGaleryComponents/ZZZgallery.module.css";
import { useState, useEffect } from "react";


export const ImageGalery = () =>
{
  const [basicSite, setBasicSite] = useState("");
  const [pageNr, setPageNr] = useState(1);
  const [itemsList, setItemsList] = useState([]);
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(true);
  const [largeImg, setLargeImg] = useState("");

  const handleSearch = (basic) => {setBasicSite(basic); setPageNr(1); setItemsList([]); };
  const handlePageChange = () => {setPageNr(prevPageNr => prevPageNr + 1); };
  const handleLargeImg = (largeImageURL) => {setLargeImg(largeImageURL)}
  const handleCloseModal = (elem) => {if(elem === "DIV"){setLargeImg("")}}

  const fetching = () =>
    {setLoading(true);
     const site = `${basicSite}&page=${pageNr}`;
     console.log(site);
     fetch(site).then((res) => {if(!res.ok){throw new Error("There seems to be an issue with the link, please check.")}
                               else{return res.json()}})
               .then((data) => {const newHit = data.hits;
                                const arreyNewHit = newHit.map(({id, tags , webformatURL, largeImageURL}) => {return {id, tags , webformatURL, largeImageURL}});
                                let list = [...itemsList, ...arreyNewHit];
                                setItemsList(list); setLoading(false);})
               .catch((error) => {setError(error); setLoading(false);})
    }
   
  useEffect(()=>{fetching();},[basicSite, pageNr])

  return (<div className={css.gallery}>
              <SearchBar inputSearch={handleSearch}/>
              <ImageGaleryList itemsListupload={itemsList} largeImg={handleLargeImg}/>
              {itemsList.length !== 0 && <AddButton addNewItems={handlePageChange}/>}
              {loading === true && <Loader />}
              <Modal largeImgInfo={largeImg} closeModal={handleCloseModal}/>
           </ div>)
}  