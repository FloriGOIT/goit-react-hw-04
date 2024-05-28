import css from "./ZZZfeed.module.css";
import PropTypes from "prop-types";

export const OptionsFeedback = ({allOptionsArr, increment}) =>
    { 
     const confirmOption = (e) => {let optionType = e.target.name; console.log(optionType); increment(optionType)}
      
     return(<ul className={css.listFeedback}>
                {allOptionsArr.map((option, index) => <li key={index} onClick={confirmOption}>
                                                <button type="button" name={option.type}>{option.type}</button>
                                        </li>)}
            </ul>)
    }

OptionsFeedback.propTypes = {allOptionsArr: PropTypes.arrayOf(PropTypes.object),
                            increment: PropTypes.func}