import React from 'react';
import './carte.css';

function Card(props) {
  return (
    <div className="cartecredit">
     
     <div className="infos">
         
         <h2>{props.infos.RIB} </h2>
         <h3>{props.infos.date} </h3>
         <h2>{props.infos.name} </h2>
       
         </div>
    </div>
  );
}

export default Card;