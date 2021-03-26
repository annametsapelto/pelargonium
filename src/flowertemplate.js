import React from 'react';
import Flowerpicture from './flowerpicture';
import './flower.css';

function Flowertemplate(props) {
    return (
        <div className="template">
           <h3>{props.title}</h3>
           <Flowerpicture
               img = {props.img}
               alt = {props.title}
           />
           <p>{props.text}</p>
        </div>
    )

}
export default Flowertemplate;