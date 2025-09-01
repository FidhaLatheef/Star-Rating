import { useState } from "react";
import "./style.css";
import { FaStar } from "react-icons/fa";

export default function StarRating({ noOfStars = 5 }) {
  const [rating,setRating]=useState(0);
  const [hover,setHover]=useState(0);

  return (
    <div>
      {[...Array(noOfStars)].map((_, index) => {
        index += 1;
        return (
           <FaStar 
           className={index<=(hover||rating)?'active':'inactive'}
        key={index} 
        size={40} 
        onClick={()=>setRating(index)}
        onMouseEnter={()=>setHover(index)}
        onMouseLeave={()=> setHover(rating)}
        />
        );
       
      })}
    </div>
  );
}
