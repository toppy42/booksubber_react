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

    this.startTime = '1';
    this.endTime = '2.567';
    this.sourceUrl = './book_sample.m4a';

    this.audioTimeout = null;

    this.state = {
      isPlaying: false,
    };
  }

  componentDidMount() {
    this.resetPlayStatus();
  }

  playAudio() {
    const audioEl = this.audioElement.current;
    audioEl.play();
    this.limitAudio();
    this.setState({ isPlaying: true });
  }

  pauseAudio() {
    // Need to reset the current time
    const audioEl = this.audioElement.current;
    audioEl.pause();
    this.resetPlayStatus();
  }

  renderPlayController() {
    if (this.state.isPlaying) {
      return this.renderPauseButton();
    } else {
      return this.renderPlayButton();
    }
  }

  renderButton(callback, symbol) {
    return (
      <button onClick={callback.bind(this)}>
        <span>{symbol}</span>
      </button>
    );
  }

  renderPlayButton() {
    return this.renderButton(this.playAudio, '|>');
  }

  renderPauseButton() {
    return this.renderButton(this.pauseAudio, '||');
  }

  onAudioEnd() {
    console.log('onAudioEnd');
    this.resetPlayStatus();
  }

  limitAudio() {
    const startTime = parseFloat(this.startTime);
    const endTime = parseFloat(this.endTime);
    let timeDiff = (endTime - startTime) * 1000;

    setTimeout(() => this.pauseAudio(), timeDiff);
  }

  resetPlayStatus() {
    const audioEl = this.audioElement.current;
    audioEl.currentTime = this.startTime;
    this.setState({ isPlaying: false });
  }

  generateAudioUrl() {
    return this.sourceUrl;
    // return `${this.sourceUrl}#t=${this.startTime},${this.endTime}`;
  }

  render() {
    return (
      <div>
        {this.renderPlayController()}
        <audio
          className="audio-element"
          ref={this.audioElement}
          onPause={this.onAudioEnd.bind(this)}
          onEnded={this.onAudioEnd.bind(this)}
        >
          <source src={this.generateAudioUrl()} />
        </audio>
      </div>
    );
  }
}

AudioPlayer.propTypes = {
  audioFile: PropTypes.string,
};

export default AudioPlayer;
