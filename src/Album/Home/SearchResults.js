import React, { Component } from 'react';

class SearchResults extends Component {
  state = {
    albums: []
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

  render() {
    return (
      <div>
        { this.state.albums ? (
          <div>
            { this.state.albums.map(album => (
              <p>{ album.name }</p>
            ))}
          </div>
        ) : (
          <p>No results</p>
        )}
      </div>
    )
  }
}

export default SearchResults;