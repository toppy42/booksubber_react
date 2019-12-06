import React from 'react';
import PropTypes from 'prop-types';

import ContentArea from './ContentArea';
import AudioPlayer from './AudioPlayer';

class ContentSyncRow extends React.Component {
  constructor(props) {
    super(props);
  }

  // { "type": "silence", "startTime": 0.0, "endTime": 1.46 },
  retrieveAudioBounds() {
    const audioContentList = this.props.audioContentList;
    const firstAudio = audioContentList[0];
    const lastAudio = audioContentList.slice(-1)[0];

    let startTime = null;
    let endTime = null;

    if (firstAudio) {
      startTime = firstAudio.startTime;
      endTime = lastAudio.endTime;
    }

    const returnObject = {
      startTime: startTime,
      endTime: endTime,
    }

    console.log('Audio Bounds')
    console.log(returnObject)

    return returnObject;
  }

  convertAudioListToTextList() {
    const convertAudioToText = function(audioInfo) {
      return `${audioInfo.type}: [${audioInfo.startTime}, ${audioInfo.endTime}]`;
    };

    return this.props.audioContentList.map(convertAudioToText);
  }

  render() {
    return (
      <div className="row border" style={{ minHeight: '100px' }}>
        <div className="col-sm" style={{ backgroundColor: 'blue' }}>
          <ContentArea contentList={this.props.textContentList} />
        </div>
        <div className="col-sm-3" style={{ backgroundColor: 'white' }}>
          <AudioPlayer {...this.retrieveAudioBounds()}/>
        </div>
        <div className="col-sm" style={{ backgroundColor: 'red' }}>
          <ContentArea contentList={this.convertAudioListToTextList()} />
        </div>
      </div>
    );
  }
}

ContentArea.propTypes = {
  textContentList: PropTypes.array,
  audioContentList: PropTypes.array,
  audioFile: PropTypes.string,
};

export default ContentSyncRow;
