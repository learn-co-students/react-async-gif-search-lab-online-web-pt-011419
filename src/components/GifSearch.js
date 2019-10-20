import React, { Component } from 'react'

export default class GifSearch extends Component {

  constructor(){
    super()
    this.state = {
      query: ""
    }
  }

  handleSubmit = event => {
    event.preventDefault()
    this.props.fetchGIFs(this.state.query)
  }

  render() {
    return (
      <div>
        <form onSubmit={this.handleSubmit}>
          Search GIFs: <input
            type="text"
            value={this.state.query}
            onChange={event => this.setState({query: event.target.value})}
          />
        </form>
      </div>
    )
  }

}
