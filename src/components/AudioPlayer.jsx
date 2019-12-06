import React from 'react';
import PropTypes from 'prop-types';

/* Notes on the Audio Player:
https://www.w3schools.com/tags/ref_av_dom.asp

Relevant tags:

Questions:
- Current state of audio player:
  - paused() => returns boolean true if paused, false otherwise
- playing a specific range
  - https://stackoverflow.com/questions/24560727/play-audio-range-in-html5

  Option 1:
  - 'book.mp3#t=start,end'
  - Unfortunately, looks like this won't work.  It only limits the audio on the first play

  Option 2:
  - currentTime for setting start
  - timeupdate for monitoring current time ( I don't like this one)
  - https://gingertech.net/2009/08/19/jumping-to-time-offsets-in-videos/


- Managing state of audio player in react
  https://dev.to/ma5ly/lets-make-a-little-audio-player-in-react-p4p
  Refs: https://reactjs.org/docs/refs-and-the-dom.html

- onended event for monitoring the ending of the audio
*/

class AudioPlayer extends React.Component {
  constructor(props) {
    super(props);
    this.audioElement = React.createRef();

    this.startTime = this.props.startTime;
    this.endTime = this.props.endTime;
    this.sourceUrl = './book_sample.m4a';

    this.audioTimeout = null;

    this.state = {
      isPlaying: false,
    };
  }

  componentDidMount() {
    if (this.audioIsValid()) {
      this.resetPlayStatus();
    }
  }

  onAudioEnd() {
    this.resetPlayStatus();
  }

  audioIsValid() {
    return this.startTime !== null && this.endTime !== null;
  }

  // Audio Manipulation Methods
  pauseAudio() {
    const audioEl = this.audioElement.current;
    audioEl.pause();
    this.resetPlayStatus();
  }

  playAudio() {
    const audioEl = this.audioElement.current;
    audioEl.play();
    this.limitAudio();
    this.setState({ isPlaying: true });
  }

  limitAudio() {
    const startTime = parseFloat(this.startTime);
    const endTime = parseFloat(this.endTime);
    const timeDiff = (endTime - startTime) * 1000;

    this.audioTimeout = setTimeout(() => this.pauseAudio(), timeDiff);
  }

  resetPlayStatus() {
    clearTimeout(this.audioTimeout);
    const audioEl = this.audioElement.current;
    audioEl.currentTime = this.startTime;
    this.setState({ isPlaying: false });
  }

  // Render Methods
  renderPlayController() {
    if (!this.audioIsValid()) {
      return this.renderInvalidAudio();
    }

    if (this.state.isPlaying) {
      return this.renderPauseButton();
    }

    return this.renderPlayButton();
  }

  renderInvalidAudio() {
    return this.renderButton(() => {}, 'X');
  }

  renderPlayButton() {
    return this.renderButton(this.playAudio, '|>');
  }

  renderPauseButton() {
    return this.renderButton(this.pauseAudio, '||');
  }

  renderButton(callback, symbol) {
    return (
      <button onClick={callback.bind(this)}>
        <span>{symbol}</span>
      </button>
    );
  }

  render() {
    // Note: I'm not sure the on AudioEnd callbacks are necessary or not
    return (
      <div>
        {this.renderPlayController()}
        <audio
          className="audio-element"
          ref={this.audioElement}
          onPause={this.onAudioEnd.bind(this)}
          onEnded={this.onAudioEnd.bind(this)}
        >
          <source src={this.sourceUrl} />
        </audio>
      </div>
    );
  }
}

AudioPlayer.propTypes = {
  audioFile: PropTypes.string,
  startTime: PropTypes.number,
  endTime: PropTypes.number,
};

export default AudioPlayer;
