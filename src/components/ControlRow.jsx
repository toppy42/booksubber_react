import React from 'react';
import PropTypes from 'prop-types';

class ControlRow extends React.Component {

  testCallback() {
    console.log("Test Callback");
  }

  render() {
    return (
      <div className="row border" style={{}}>
        <div className="col-sm" style={{}}>
          <div
            className="btn-group container"
            role="group"
            aria-label="Text Controls"
          >
            <button className="btn btn-secondary" type="button" onClick={this.props.downButtonLeft}>
              ▽
            </button>
            <button className="btn btn-secondary" type="button" onClick={this.props.upButtonLeft}>
              △
            </button>
          </div>
        </div>
        <div className="col-sm-3" style={{}}>
          <div
            className="btn-group container"
            role="group"
            aria-label="New Sync Area"
          >
            <button className="btn btn-secondary" type="button" onClick={this.props.addButtonCenter}>
              +
            </button>
          </div>
        </div>
        <div className="col-sm" style={{}}>
          <div
            className="btn-group container"
            role="group"
            aria-label="Audio Controls"
          >
            <button className="btn btn-secondary" type="button" onClick={this.props.downButtonRight}>
              ▽
            </button>
            <button className="btn btn-secondary" type="button"  onClick={this.props.upButtonRight}>
              △
            </button>
          </div>
        </div>
      </div>
    );
  }
}

ControlRow.propTypes = {
  upButtonLeft: PropTypes.func,
  downButtonLeft: PropTypes.func,
};

ControlRow.defaultProps = {

};

export default ControlRow;
