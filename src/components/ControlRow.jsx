import React from "react";

class ControlRow extends React.Component {
  render() {
    return (
      <div className="row border" style={{}}>
        <div className="col-sm" style={{}}>
          <div
            className="btn-group container"
            role="group"
            aria-label="Text Controls"
          >
            <button className="btn btn-secondary">▽</button>
            <button className="btn btn-secondary">△</button>
          </div>
        </div>
        <div className="col-sm-3" style={{}}>
          <div
            className="btn-group container"
            role="group"
            aria-label="New Sync Area"
          >
            <button className="btn btn-secondary">+</button>
          </div>
        </div>
        <div className="col-sm" style={{}}>
          <div
            className="btn-group container"
            role="group"
            aria-label="Audio Controls"
          >
            <button className="btn btn-secondary">▽</button>
            <button className="btn btn-secondary">△</button>
          </div>
        </div>
      </div>
    );
  }
}

export default ControlRow;
