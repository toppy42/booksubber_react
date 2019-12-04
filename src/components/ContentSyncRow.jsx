import React from 'react';
import ContentArea from './ContentArea';
import PropTypes from 'prop-types';

class ContentSyncRow extends React.Component {
  constructor(props){
    super(props)
  }

  render() {
    return (
      <div className="row border" style={{ minHeight: '100px' }}>
        <div className="col-sm" style={{ backgroundColor: 'blue' }}>
          <ContentArea contentList={this.props.textContentList}/>
        </div>
        <div className="col-sm-3" style={{ backgroundColor: 'white' }}></div>
        <div className="col-sm" style={{ backgroundColor: 'red' }}>
          <ContentArea contentList={this.props.audioContentList}/>
        </div>
      </div>
    );
  }
}

ContentArea.propTypes = {
  textContentList: PropTypes.array,
  audioContentList: PropTypes.array
};

export default ContentSyncRow;
