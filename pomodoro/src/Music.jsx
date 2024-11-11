import React, { Component } from "react";
import song from "./assets/music.mp3";

class Music extends Component {
  state = {
    audio: new Audio(song),
    isPlaying: false,
    volume: 0.5,
  };

  componentDidMount() {
    this.state.audio.loop = true;
    this.state.audio.volume = this.state.volume;
  }
  playPause = () => {
    let isPlaying = this.state.isPlaying;

    if (isPlaying) {
      this.state.audio.pause();
    } else {
      this.state.audio.play();
    }

    this.setState({ isPlaying: !isPlaying });
  };

  handleVolumeChange = (event) => {
    const volume = parseFloat(event.target.value);
    this.setState({ volume });
    this.state.audio.volume = volume;
  };

  render() {
    return (
      <div>
        <button className="music-controller" onClick={this.playPause}>
          Play | Pause
        </button>
        <br />
        <input
          className="volume-slider"
          type="range"
          min="0"
          max="1"
          step="0.01"
          value={this.state.volume}
          onChange={this.handleVolumeChange}
        />
      </div>
    );
  }
}

export default Music;
