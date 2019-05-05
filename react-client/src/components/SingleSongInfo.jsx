import React from 'react';

function SingleSongInfo(props) {
  const {songName, artistName, albumName} = props.song;
  return (
    <div>
      <div>
        {console.log('the thingy: ', songName)}
        {songName} by {artistName} from the album {albumName}
      </div>
    </div>
  )
}

export default SingleSongInfo;
