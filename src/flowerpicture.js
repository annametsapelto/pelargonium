import React from 'react';
import './flower.css';

function Flowerpicture(props) {
    return (
        <div className = "kuva">
            <img src = {props.img} alt = {props.alt}/>
        </div>
    )
}
export default Flowerpicture;