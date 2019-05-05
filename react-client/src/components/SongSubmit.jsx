import React from 'react';

function SongSubmit(props) {
  return (
    <form onSubmit={props.submitSong} onChange={props.changeURI}>
      <input type="text" placeholder="Place songURI here!"></input>
      <input type="submit"></input>
    </form>
  )
}

export default SongSubmit;
