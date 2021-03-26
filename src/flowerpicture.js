import React from 'react';

function Flowerpicture(props) {
    return (
        <div className = "kuva">
            <img src = {props.img}/>
        </div>
    )
}
export default Flowerpicture;