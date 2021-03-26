import React from 'react';

function Flowerpicture(props) {
    return (
        <div className = "kuva">
            <img src = {props.img} alt = {props.alt}/>
        </div>
    )
}
export default Flowerpicture;