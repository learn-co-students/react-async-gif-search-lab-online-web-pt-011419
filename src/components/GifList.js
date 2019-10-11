import React from 'react';

function GifList (props) {
    // debugger;

    return (
        <div>
            {props.gifs}.map (gif => (gif))
        </div>
    )
}

export default GifList