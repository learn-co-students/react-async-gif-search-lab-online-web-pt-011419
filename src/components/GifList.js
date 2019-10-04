import React from 'react';

// export default class GifList extends React.Component {
//   constructor(props) {
//     super(props)
//   }

//   renderGifs = props => {
//     return this.props.gifs.map(gif => {
//       console.log(gif)
//       return (
//         <ul>
//           <li><img key={gif.url} alt="gif" src={gif} /></li>
//         </ul>
//       )
//     })
//   }

//   render() {
//     return <div>{this.renderGifs()}</div>
//   }
// }

const GifList = props => {
  console.log(props);
  return (
    <div>
      {props.gifs.map(gif => <img key={gif.url} src={gif.url} alt="gif" />)}
    </div>
  )
}

export default GifList