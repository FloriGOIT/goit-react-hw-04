
import css from "./ZZZgallery.module.css"

export const SearchBar = ({inputSearch}) =>
{   
   const site = "https://pixabay.com/api/?key=42799638-b50871d8c9a958480a9d6ba7c&&safesearch=true&image_type=photo&pretty=true&per_page=4&q=";

   const handleSunbmit = (e) => {e.preventDefault();
                                 const input = e.currentTarget.elements.input.value;
                                 const basic = `${site}${input}`;
                                 inputSearch(basic);}

    return(<header className={css.searchBar}>
              <form onSubmit={handleSunbmit}>
                 <button type="submit">🔍</button>
                 <input type="text" name="input" autoComplete="off" autoFocus placeholder="Search images and  photos..."/>
              </form>
           </header>)
}
