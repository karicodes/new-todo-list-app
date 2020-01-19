import React from 'react';

function OutstandingCount(props) {
  return <h3>Outstanding Tasks: <span>{props.count}</span></h3>
}

export default OutstandingCount;