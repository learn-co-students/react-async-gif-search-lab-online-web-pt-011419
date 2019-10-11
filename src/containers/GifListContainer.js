import React from 'react';
import GifList from '../components/GifList'
import GifSearch from '../components/GifSearch';

export default class GifListContainer extends React.Component{

    constructor(){
        super()
        this.state = {
            gifsArray: []
        }
    }

    fetchGifs = (query="") => {
        fetch(`http://api.giphy.com/v1/gifs/search?q=${query}&api_key=dc6zaTOxFJmzC&rating=g`) 
        .then(resp => resp.json())
        .then(({data}) => {
            // debugger;
            // While loop for first 3 gifs?

            this.setState({ gifsArray: data.map(gif => gif.images.original.url) })
            // debugger;
        })
    }
    
    componentDidMount() {
        this.fetchGifs()
    }

    render(){
        return (
        <div>
            <GifList gifs={this.state.gifsArray} />
            <GifSearch fetchGifs={this.fetchGifs} />
        </div>
        )
    }
}