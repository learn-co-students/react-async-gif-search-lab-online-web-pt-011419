import React from 'react';

export default class GifSearch extends React.Component {

  constructor() {
    super() 

    this.state = {
      query: ''
    }
  }

  handleSubmit = event => {
    event.preventDefault()
    this.props.cb(this.state.query)
  }

  render() {
    return (
      <form onSubmit={this.handleSubmit}>
        <input type="text" placeholder="search..." value={this.state.query} onChange={event => this.setState({ query: event.target.value })}/>
      </form>
    )
  }
}