import React, { Component } from 'react';

class OutstandingCount extends Component {
  render() {
    return (
      <div>
          <h3>Outstanding Tasks: <span>{this.props.count}</span></h3>
      </div >
    );
  }
}

export default OutstandingCount;