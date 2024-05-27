import { OptionsFeedback } from "./FeedbackComponents/OptionsFeedback";
import { StatsFeedback } from "./FeedbackComponents/StatsFeedback";
import css from "../Feedback/FeedbackComponents/ZZZ.module.css"
import { useState, useEffect } from "react";

export const Feedback = () =>
{
   const [good , setGood] = useState( { type: "Good", clicks: 0 });
   const [bad, setBad] =  useState( { type: "Bad", clicks: 0 });
   const [neutral, setNeutral] = useState({ type: "Neutral", clicks: 0 });
   const [total, setTotal] = useState({ type: "Total", clicks: 0 });
   const [percentage, setPercentage] = useState({ type: "Positive feedback:", clicks: 0 });
   let allOptions = [good, bad, neutral];
   let allStats = [...allOptions, total, percentage];
  

   const handleIncrement = (optionType) => {if(optionType === good.type){setGood({...good, clicks: good.clicks +1})}
                                            else if(optionType === bad.type){setBad({...bad, clicks: bad.clicks +1})}
                                            else{setNeutral({...neutral, clicks: neutral.clicks +1})}};


    useEffect(()=> {let totalClicks = good.clicks + bad.clicks + neutral.clicks;
                    setTotal({type: "Total", clicks:totalClicks });
                    let percentCalc = Math.round(good.clicks /totalClicks * 100);
                    setPercentage({ type: "Positive feedback", clicks: `${percentCalc} %` })},
                    [good,bad,neutral]);

   
  return (<div className={css.feedback}>
            <h3>Please leave us your feedback</h3>
            <OptionsFeedback  allOptionsArr={allOptions} increment={handleIncrement}/> 
            {total.clicks === 0 ? <h2>No feedback given</h2>: <StatsFeedback allStatsArr={allStats}/>}
          </div>)
}

//const [options, setOptions] = useState([{type: "Good", clicks: 0}, 
//                                       {type: "Bad", clicks: 0},
//                                       {type: "Neutral", clicks: 0},])
//const handleIncrement = (optionType) => {setOptions(prevOptions => prevOptions.map(opt => opt === optionType ? {...opt, clicks: opt.clicks + 1} : opt))}