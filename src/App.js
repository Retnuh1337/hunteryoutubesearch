import _ from 'lodash'; // instead of using Lodash, most people use the underscore "_"
import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import SearchBar from './components/search_bar';
import VideoList from './components/video_list';
import VideoDetail from './components/video_detail';
import YTSearch from 'youtube-api-search';
const API_KEY = 'AIzaSyBjRH9hAd6T-hM6av9JC8m5Qgrn3cdp8Sk'

class App extends Component {
  // constructor passed props and super called
  constructor(props){
    super(props);
    // setting initial state. videos is empty array, selectedVideo is null
    this.state = { 
      videos: [],
      selectedVideo: null
     };
    this.videoSearch('balisong');
  }

  videoSearch(term){
    // this is the API Search call that we pass our API Key and the search term
    // we have a callback function with param of data, which is the videos
    // we are setting our empty videos array to data (all the video objects) and 
    // we are setting the selectedVideo to the first data (video) object.
    YTSearch({ key: API_KEY, term: term}, (data) => {
    this.setState({ videos: data, selectedVideo: data[0]}); // this.setState causes the render function to fire
    });
  }

  render() {
    // this is lodash, it assigns the function and calls the function 500 milsec
    const videoSearch = _.debounce((term) => {this.videoSearch(term)}, 500);

    return (
      <div className="App">
        <div className='container'>
          <div className='Description'>
            <h2>YouTube Search using React, Lodash and the YouTube API's.</h2>
            <p>This was created as a project during an online course called Modern React with Redux. This project showcases the React portion of the project. This project is hosted on Heroku using Node JS.</p>
          </div>
          <SearchBar onSearchTermChange={ videoSearch } />
          <VideoDetail video={this.state.selectedVideo} />
          <VideoList 
          onVideoSelect={selectedVideo => this.setState({selectedVideo})}
          videos={this.state.videos} />
        </div>
      </div>
    );
  }
}

export default App;
