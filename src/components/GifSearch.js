import React from 'react'

class GifSearch extends React.Component {

  state = {
   query: ""
 }

 handleSubmit = event => {
    event.preventDefault()
    this.props.fetchGIFs(this.state.query)
  }

  render() {
    return (
      <form className="ui form" onSubmit={this.handleSubmit}>
        <h3>GIF</h3>
          <input type="text" name="query" id="query" value={this.state.query} onChange={event => this.setState({query: event.target.value})}></input>
          <button className="ui secondary button" >Find GIFs</button>
      </form>
    )
  }
}

export default GifSearch
