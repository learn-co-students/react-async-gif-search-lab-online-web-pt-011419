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
            let slicedData = data.slice(0, 3)
            this.setState({ gifsArray: slicedData.map(gif => gif.images.original.url) })
        })
    }
    
    componentDidMount() {
        this.fetchGifs()
    }

    render(){
        return (
        <div>
            <GifSearch fetchGifs={this.fetchGifs} />
            <GifList gifs={this.state.gifsArray} />
        </div>
        )
    }
}