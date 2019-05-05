import React from 'react';


function CurrentSong(props) {
  if (typeof props.currentSongInfo != 'undefined') {
    return (
      <div>
        <h1>CURRENT SONG</h1>
        <div>{props.currentSongInfo.name} by {props.currentSongInfo.album.artists[0].name}</div>
        {console.log(props.currentSongInfo.album.images.url)}
        <img src={props.currentSongInfo.album.images[2].url}></img>
      </div>
    )
  } else {
    return (
      <div>
        <h1>CURRENT SONG</h1>
        No Song currently playing.
      </div>
    )
  }
}

export default CurrentSong;
