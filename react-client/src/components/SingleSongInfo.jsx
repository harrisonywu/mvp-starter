import React from 'react';

function SingleSongInfo(props) {
  const {songName, artistName, albumName, albumImg} = props.song;
  return (
    <div>
      <div>
        {console.log('the thingy: ', songName)}
        {songName} by {artistName} from the album {albumName}
      </div>
      <img src={albumImg}></img>
    </div>
  )
}

export default SingleSongInfo;
