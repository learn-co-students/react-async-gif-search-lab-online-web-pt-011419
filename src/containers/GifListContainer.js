import React from 'react';
import GifList from '../components/GifList'

export default class GifListContainer extends React.Component{

    constructor(){
        super()
        this.state = {
            gifsArray: []
        }
    }

  

    fetchGifs = (query="testing") => {
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
        // debugger;
    }

    render(){
        return <GifList gifs={this.state.gifsArray} />
    }
}