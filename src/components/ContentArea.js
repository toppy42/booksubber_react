import React from 'react';
import PropTypes from 'prop-types';

class ContentArea extends React.Component {
    constructor(props) {
        super(props)
    }

    static defaultProps = {
        contentList: ['test1']
    }

    generateContentList(){
        return this.props.contentList.map(this.generateTextContent);
    }

    generateTextContent(text) {
        return <div>{text}</div>
    }

    render() {
        return (
            <div>
                {this.generateContentList()}
            </div>
        );
    };
}

ContentArea.propTypes = {
    contentList: PropTypes.array
}

export default ContentArea;