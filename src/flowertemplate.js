import React from 'react';
import Flowerpicture from './flowerpicture';

function Flowertemplate(props) {
    return (
        <div>
           <h3>{props.title}</h3>
           <Flowerpicture
           />
           <p>{props.text}</p>
        </div>
    )

}
export default Flowertemplate;