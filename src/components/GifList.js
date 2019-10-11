import React from 'react';

function GifList (props) {
    let gifs = props.gifs.map ( (gif, key) => {
        return <span key={key}>{key + 1}. {gif}<br/> <br/> </span> })
    
    return <ul> {gifs} </ul>
}

export default GifList