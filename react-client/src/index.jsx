import React from 'react';
import ReactDOM from 'react-dom';
import axios from 'axios';

import PreviouslyPlayed from './components/PreviouslyPlayed.jsx';
import SongSubmit from './components/SongSubmit.jsx';
import CurrentSong from './components/CurrentSong.jsx';
class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = { 
      currentURI: '',
    }

    this.functionForGrabbingSongs = this.functionForGrabbingSongs.bind(this);
    this.changeURI = this.changeURI.bind(this);
  }

  componentDidMount() {
    // What I want to happen
    // Grab all the previously played songs and pass to previously played.
    // Maybe set the most recently played song be the current song?
    // Definitely store x most recently saved songs and pass that into state
    // We'll then send that to our previously played component, where we will display the previously played songs


    axios.get('/previousSongs')
      .then((allSongs) => {
        this.setState({
          allSongs: allSongs.data,
        })
      })
  }

  changeURI(e) {
    this.setState({
      currentURI: e.target.value
    })
  }

  functionForGrabbingSongs(e) {
    e.preventDefault();

    //the URI passed in will be what sends
    let songInstance = axios.create({
      // baseurl: 'https://api.spotify.com/v1/tracks',
      headers: { 
        'Accept': 'application/json',
        'Content-Type': 'application/json',
        'Authorization': 'Bearer BQDm5qmJbcgJWWurUtZLNQd5jnfIJt_d7tTDBewuuPoLZ_RJ8vuoUR_wNpZK_sUMBZjPhoxXJVpbxFzCaW3U9Ra01D6Su-6RXTwPxAHx_Dhy57uMDgx6ayNRu-Z-TuJ5tvnJtd-rGG0OKwXA'
      }
    })
    
    songInstance.get(`https://api.spotify.com/v1/tracks/${this.state.currentURI}`)
      .then((songInfo) => {
        this.setState({
          currentSong: songInfo.data,
        })
       
      axios.post('/saveSong', songInfo.data)
        .then(() => console.log('song saved: ', songInfo.data))

      })
      // on error, display that that URI does not exist, try another one.
      .catch((error) => console.log(error))

  }


  render () {
    return (
    <div>
      <PreviouslyPlayed previousSongs={this.state.allSongs}/>
      <SongSubmit changeURI={this.changeURI} submitSong={this.functionForGrabbingSongs}/>
      <CurrentSong currentSongInfo={this.state.currentSong}/>
    </div>)
  }
}

ReactDOM.render(<App />, document.getElementById('app'));