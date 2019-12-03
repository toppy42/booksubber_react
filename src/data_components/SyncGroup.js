import PropTypes from 'prop-types';

class SyncGroup {
  constructor(textContentList, audioContentList){
    this.textContentList = textContentList;
    this.audioContentList = audioContentList;
  }

  pushNewStartText(newText){

  }

  pushNewEndText(newText){

  }
}

SyncGroup.propTypes = {
  textContentList: PropTypes.array,
  audioContentList: PropTypes.array
};

export default SyncGroup;