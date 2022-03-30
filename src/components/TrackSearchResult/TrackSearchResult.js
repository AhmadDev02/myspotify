import React from 'react'
import data from './all-sample'


export default function TrackSearchResult({ track, chooseTrack }) {
    function handlePlay() {
      chooseTrack(track)
    }
  
    return (
      <div
        className="d-flex m-2 align-items-center"
        style={{ cursor: "pointer" }}
        onClick={handlePlay}
      >
         <div className="queue">
             <div className="queue-cover" >
                 {
                     data.map((user,key) => {
                         return (
                             <section>
                                 <img src={user.url} alt="" className="img" />
                                 <p>
                                 {user.name}
                                 </p>
                                 <p>
                                 {user.track_number}
                                 </p>
                                 <p>
                                 {user.type}
                                </p>
                             </section>
                         )
                     })
                 }
            </div>
         </div>
        <img src={track.images} style={{ height: "64px", width: "64px" }} alt="" />
        <div className="ml-3">
          <div>{track.title}</div>
          <div className="text-muted">{track.artist}</div>
        </div>
      </div>
    )
  }
