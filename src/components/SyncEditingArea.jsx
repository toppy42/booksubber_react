import React from 'react';
import ContentSyncRow from './ContentSyncRow';
import ControlRow from './ControlRow';
import SyncGroup from '../data_components/SyncGroup';

class SyncEditingArea extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      syncGroups: [
        new SyncGroup(
          ['segment1: text 1', 'segment1: text 2', 'segment1: text 3'],
          ['segment1: audio 1', 'segment1: audio 2', 'segment1: audio 3'],
        ),
        new SyncGroup(
          ['segment2: text 1', 'segment2: text 2', 'segment2: text 3'],
          ['segment2: audio 1', 'segment2: audio 2', 'segment2: audio 3'],
        ),
      ],
    };
  }

  pushTextContentUp(index) {
    const tempSyncGroups = this.state.syncGroups.slice();
    const sourceSyncGroup = tempSyncGroups[index + 1];
    const destinationSyncGroup = tempSyncGroups[index];

    const movedText = sourceSyncGroup.popStartText();
    if (movedText) {
      destinationSyncGroup.pushNewEndText(movedText);
    }

    this.setState({ syncGroups: tempSyncGroups });
  }

  pushTextContentDown(index) {
    const tempSyncGroups = this.state.syncGroups.slice();
    const sourceSyncGroup = tempSyncGroups[index];
    const destinationSyncGroup = tempSyncGroups[index + 1];

    const movedText = sourceSyncGroup.popEndText();
    if (movedText) {
      destinationSyncGroup.pushNewStartText(movedText);
    }
    this.setState({ syncGroups: tempSyncGroups });
  }

  pushAudioContentUp(index) {
    const tempSyncGroups = this.state.syncGroups.slice();
    const sourceSyncGroup = tempSyncGroups[index + 1];
    const destinationSyncGroup = tempSyncGroups[index];

    const movedAudio = sourceSyncGroup.popStartAudio();
    if (movedAudio) {
      destinationSyncGroup.pushNewEndAudio(movedAudio);
    }

    this.setState({ syncGroups: tempSyncGroups });
  }

  pushAudioContentDown(index) {
    const tempSyncGroups = this.state.syncGroups.slice();
    const sourceSyncGroup = tempSyncGroups[index];
    const destinationSyncGroup = tempSyncGroups[index + 1];

    const movedAudio = sourceSyncGroup.popEndAudio();
    if (movedAudio) {
      destinationSyncGroup.pushNewStartAudio(movedAudio);
    }
    this.setState({ syncGroups: tempSyncGroups });
  }

  generateContentSyncRows() {
    // Why do I have to bind this here?
    return this.state.syncGroups.map(this.generateContentSyncRow.bind(this));
  }

  generateContentSyncRow(syncGroup, syncGroupIndex) {
    const textUpButtonCallback = () => this.pushTextContentUp(syncGroupIndex);

    const textDownButtonCallback = () => this.pushTextContentDown(syncGroupIndex);

    const audioUpButtonCallback = () => this.pushAudioContentUp(syncGroupIndex);

    const audioDownButtonCallback = () => this.pushAudioContentDown(syncGroupIndex);

    return [
      <ContentSyncRow
        textContentList={syncGroup.textContentList}
        audioContentList={syncGroup.audioContentList}
      />,
      <ControlRow
        upButtonLeft={textUpButtonCallback}
        downButtonLeft={textDownButtonCallback}
        upButtonRight={audioUpButtonCallback}
        downButtonRight={audioDownButtonCallback}
      />,
    ];
  }

  render() {
    return <div>{this.generateContentSyncRows()}</div>;
  }
}

export default SyncEditingArea;
