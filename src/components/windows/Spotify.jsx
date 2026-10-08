import React from 'react'
import MacWindow from './MacWindow'
import "./spotify.scss"
const Spotify = ({windowName,setwindowState}) => {
  return (
    <MacWindow windowName={windowName}  setwindowState={setwindowState} width="25vw">
        <div className="spotify-window">
            <iframe data-testid="embed-iframe" style={{borderRadius:"12px" }}src="https://open.spotify.com/embed/playlist/4kn7IFwVbNW92oDAdqCs8p?utm_source=generator&theme=0&si=db1c8d301ba64a92" width="100%" height="352" frameBorder="0" allowfullscreen="" allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture" loading="lazy"></iframe>
        </div>
    </MacWindow>
  )
}

export default Spotify
