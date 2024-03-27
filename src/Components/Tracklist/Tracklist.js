import React from "react";
import styles from './Tracklist.module.css'
import Track from "../Track/Track";
function Tracklist(props) {
    return (
       <div className={styles.TrackList}>
        {/* 6. take the search results object array and make a track component for EACH ONE with the object info as its props */}
        {props.userSearchResults.map( track => {
          return (
            <Track track={track} key={track.id} isRemoval={props.isRemoval} onAdd={props.onAdd} onRemove={props.onRemove}/>
          )
        })}
      </div>
    );
}

export default Tracklist;