import { SearchBar } from "./ImageGaleryComponents/1SearchBar";
import { ImageGaleryList } from "./ImageGaleryComponents/2ImageGaleryList";
import css from "./ImageGaleryComponents/ZZZgallery.module.css";
import { useState, useEffect } from "react";

export const ImageGalery = () =>
{
  const [basicSite, setBasicSite] = useState("");
  const [pageNr, setPageNr] = useState("1");
  const [itemsList, setItemsList] = useState([]);
  const [error, setError] = useState(null);

  const handleSearch = (basic) => {setBasicSite(basic); fetching()} 

  const fetching = () =>
  {  const site = `${basicSite}&page=${pageNr}`;
     console.log(site);
     fetch(site).then((res) => {if(!res.ok){throw new Error("There seems to be an issue with the link, please check.")}
                               else{return res.json()}})
               .then((data) => {const newHit = data.hits;
                                const arreyNewHit = newHit.map(({id, tags , webformatURL, largeImageURL}) => {return {id, tags , webformatURL, largeImageURL}});
                                let list = [...itemsList, arreyNewHit];
                                setItemsList(list);
                                console.log("itemsList",itemsList)})
               .catch((error) => {setError(error)})
  }
  


  return (<div className={css.gallery}>
              <SearchBar inputSearch={handleSearch}/>
              <ImageGaleryList itemsListupload={itemsList}/>
           </ div>)
}  