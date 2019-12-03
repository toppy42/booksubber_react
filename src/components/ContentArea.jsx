import React from 'react';
import PropTypes from 'prop-types';

class ContentArea extends React.Component {
  static defaultProps = {
    contentList: ['test1'],
  };

  constructor(props) {
    super(props);
  }

  generateContentList() {
    return this.props.contentList.map(this.generateTextContent);
  }

  generateTextContent(text) {
    return <div>{text}</div>;
  }

  render() {
    return <div>{this.generateContentList()}</div>;
  }
}

ContentArea.propTypes = {
  contentList: PropTypes.array,
};

export default ContentArea;
