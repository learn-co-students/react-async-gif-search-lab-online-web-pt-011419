import React from 'react';
import GifList from '../components/GifList'
import GifSearch from '../components/GifSearch'

export default class GifListContainer extends React.Component {
  constructor(){
    super()

    this.state = {
      gifs: [],
      query: ''
    }
  }

  callback = (query = "dolphins") => {
    fetch(`http://api.giphy.com/v1/gifs/search?q=${query}&api_key=dc6zaTOxFJmzC&rating=g`)
    .then(resp => resp.json())
    .then(({ data }) => {
      this.setState({
        gifs: data.map(gif => ({ url: gif.images.original.url }))
      })
    })
    console.log('hi')
  }

  componentDidMount() {
    this.callback();
  }


  // fetchGIFs = (query = "dolphins") => {
  //   fetch(`https://api.giphy.com/v1/gifs/search?q=${query}&api_key=dc6zaTOxFJmzC&rating=g&limit=3`)
  //     .then(res => res.json())
  //     .then(({ data }) => {
  //       this.setState({ gifs: data.map(gif => ({ url: gif.images.original.url })) })
  //     })
  // }


  render() {
    return (
      <div>
        <GifSearch cb={this.callback}/><br />
        <GifList gifs={this.state.gifs} /> 
      </div>
    )
  }
}