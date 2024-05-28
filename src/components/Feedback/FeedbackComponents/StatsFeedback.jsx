import css from "./ZZZfeed.module.css";
import PropTypes from "prop-types";

export const StatsFeedback = ({allStatsArr}) =>
{   
    return(<div className={css.stats}>
              <h4>Statistics</h4>
              <ul>
                  {allStatsArr.map((option,index) => <li key={index}>
                                                            <span>{option.type}: <b>{option.clicks}</b></span>
                                                       </li>)}
              </ul>
           </div>)
}

StatsFeedback.propTypes = {allStatsArr: PropTypes.arrayOf(PropTypes.object)}