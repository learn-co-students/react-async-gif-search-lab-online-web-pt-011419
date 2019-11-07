import React from 'react'

export default class GifSearch extends React.Component{

    constructor(){
        super()
        this.state = {
            query: ""
        }
    }

    handleSubmit = e => {
        e.preventDefault()
        this.props.fetchGifs(this.state.query)
    }

    render() {
        return (
            <div>
                <form onSubmit={this.handleSubmit}>
                    Search for Gifs: <input type="text" value={this.state.query} onChange={e => this.setState({query: e.target.value})} />
                </form>
            </div>
        ) 
    }

}