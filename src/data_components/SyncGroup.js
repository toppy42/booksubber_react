import PropTypes from 'prop-types';

class SyncGroup {
  constructor(textContentList, audioContentList) {
    this.textContentList = textContentList;
    this.audioContentList = audioContentList;
  }

  popStartText() {
    return this.textContentList.shift();
  }

  popEndText() {
    return this.textContentList.pop();
  }

  pushNewStartText(newText) {
    this.textContentList.unshift(newText);
  }

  pushNewEndText(newText) {
    this.textContentList.push(newText);
  }

  popStartAudio() {
    return this.audioContentList.shift();
  }

  popEndAudio() {
    return this.audioContentList.pop();
  }

  pushNewStartAudio(newAudio) {
    this.audioContentList.unshift(newAudio);
  }

  pushNewEndAudio(newAudio) {
    this.audioContentList.push(newAudio);
  }
}

SyncGroup.propTypes = {
  textContentList: PropTypes.array,
  audioContentList: PropTypes.array
};

export default SyncGroup;