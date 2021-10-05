import React, { Component } from 'react';

class App extends Component {
  state = { 
    list: true,
    cover: false,
    albums: [],
    player: {}
  }

  componentDidMount() { 
    fetch('http://localhost:3001/albums/home')
    .then( response => response.json())
    .then( responseJson => {
      this.setState({ 
        albums: responseJson.data 
      })
    })
  }

  showCover = id => {
    fetch(`http://localhost:3001/albums/${id}`)
    .then( response => response.json())
    .then( responseJson => {
      this.setState({
        album: responseJson.data
      })
    })
    this.setState({
      list: false,
      cover: true
    })
  }

  showList = () => {
    this.setState({
      list: true,
      cover: false
    })
  }

  render() { 
    return(
      <div className="container">
        { this.state.list ? (
          <div className="list-group">
            { this.state.albums.map(album => (
              <li onClick={() => this.showCover(album._id)}
              className="list-group-item list-group-item-action"
              >
                {album.name}
              </li>
            ))}
          </div>
        ) : null}
        {this.state.cover ? (
          <div className="cover" style={{ width: "18rem" }}>
            <div className="cover-body">
              <h5 className="cover-title">{this.state.album.name}</h5>
              <p className="cover-text">{this.state.album.artist}</p>
              <div onClick={() => this.showList()} className="btn btn-primary">
                Back
              </div>
            </div>
          </div>
        ) : null}
      </div>
    );
  }
}


export default App;