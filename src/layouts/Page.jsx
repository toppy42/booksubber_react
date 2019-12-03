import React from 'react';
import PropTypes from 'prop-types';

class Page extends React.Component {
  render() {
    const styles = {
      minHeight: '400px',
    };

    return (
      <div className="container border shadow" style={styles}>
        {this.props.children}
      </div>
    );
  }
}

Page.propTypes = {
  children: PropTypes.array,
};

export default Page;
