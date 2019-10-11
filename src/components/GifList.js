import React from 'react';

function GifList (props) {
    let gifs = props.gifs.map ( (gif, key) => {
        return <span key={key}><br/>< img key={gif} src={gif} alt="gif"/><br/> <br/> </span> })
    
    return <ul> {gifs} </ul>
}

export default GifList