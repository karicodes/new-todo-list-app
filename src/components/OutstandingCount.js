import React from 'react';
import styled from 'styled-components';


const Count = styled.h3`
  padding-top: 15px;
  padding-bottom: 15px;
  padding-left: 20px;
  font-style: italic;
  `

function OutstandingCount(props) {
  return <Count>Outstanding Tasks: <span>{props.count}</span></Count>
}

export default OutstandingCount;