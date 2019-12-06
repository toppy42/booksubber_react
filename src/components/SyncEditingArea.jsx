import React from 'react';
import PropTypes from 'prop-types';

import ContentSyncRow from './ContentSyncRow';
import ControlRow from './ControlRow';
import SyncGroup from '../data_components/SyncGroup';

// { type: 'silence', startTime: 0.0, endTime: 1.46 }

class SyncEditingArea extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      syncGroups: [
        new SyncGroup([], []),
        new SyncGroup(
          [
            'El niño que vivió',
            'El señor y la señora Dursley,',
            'que vivían en el número 4 de Privet Drive,',
            'estaban orgullosos de decir que eran muy normales,',
            'afortunadamente.',
          ],
          [
            { type: 'silence', startTime: 0.0, endTime: 1.46 },
            { type: 'audio', startTime: 1.48, endTime: 3.8 },
            { type: 'silence', startTime: 3.82, endTime: 4.3 },
            { type: 'audio', startTime: 4.32, endTime: 5.52 },
            { type: 'silence', startTime: 5.54, endTime: 6.48 },
            { type: 'audio', startTime: 6.5, endTime: 7.46 },
          ]
        ),
        new SyncGroup(
          [
            'Eran las últimas personas que se esperaría encontrar relacionadas con algo extraño o misterioso,',
            'porque no estaban para tales tonterías.',
            'El señor Dursley era el director de una empresa llamada Grunnings,',
            'que fabricaba taladros.',
            'Era un hombre corpulento y rollizo,',
            'casi sin cuello,',
            'aunque con un bigote inmenso.',
            'La señora Dursley era delgada,',
            'rubia y tenía un cuello casi el doble de largo de lo habitual,',
            'lo que le resultaba muy útil,',
            'ya que pasaba la mayor parte del tiempo estirándolo por encima de la valla de los jardines para espiar a sus vecinos.',
          ],
          [
            { type: 'silence', startTime: 7.48, endTime: 7.98 },
            { type: 'audio', startTime: 8.0, endTime: 9.3 },
            { type: 'silence', startTime: 9.32, endTime: 10.36 },
            { type: 'audio', startTime: 10.38, endTime: 12.06 },
            { type: 'silence', startTime: 12.08, endTime: 12.2 },
            { type: 'audio', startTime: 12.22, endTime: 14.52 },
            { type: 'silence', startTime: 14.54, endTime: 15.0 },
            { type: 'audio', startTime: 15.02, endTime: 18.72 },
          ]
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

  addNewSyncGroup(prevSyncGroupIndex) {
    const newSyncGroup = new SyncGroup([], []);
    const tempSyncGroups = this.state.syncGroups.slice();
    tempSyncGroups.splice(prevSyncGroupIndex + 1, 0, newSyncGroup);

    this.setState({ syncGroups: tempSyncGroups });
  }

  generateContentSyncRows() {
    // Why do I have to bind this here?
    return this.state.syncGroups.map(this.generateContentSyncRow.bind(this));
  }

  generateContentSyncRow(syncGroup, syncGroupIndex) {
    const textUpButtonCallback = () => this.pushTextContentUp(syncGroupIndex);

    const textDownButtonCallback = () =>
      this.pushTextContentDown(syncGroupIndex);

    const audioUpButtonCallback = () => this.pushAudioContentUp(syncGroupIndex);

    const audioDownButtonCallback = () =>
      this.pushAudioContentDown(syncGroupIndex);

    const addNewSyncGroupCallback = () =>
      this.addNewSyncGroup(syncGroupIndex);

    return [
      <ContentSyncRow
        textContentList={syncGroup.textContentList}
        audioContentList={syncGroup.audioContentList}
        audioFile={this.props.audioFile}
      />,
      <ControlRow
        upButtonLeft={textUpButtonCallback}
        downButtonLeft={textDownButtonCallback}
        upButtonRight={audioUpButtonCallback}
        downButtonRight={audioDownButtonCallback}
        addButtonCenter={addNewSyncGroupCallback}
      />,
    ];
  }

  render() {
    return <div>{this.generateContentSyncRows()}</div>;
  }
}

SyncEditingArea.propTypes = {
  audioFile: PropTypes.string,
};

export default SyncEditingArea;
