import React from 'react';
import styled from 'styled-components';


const Title = styled.h1`
  padding-top: 25px;
  padding-bottom: 25px;
  padding-left: 20px;
  background-image: linear-gradient(to right, whitesmoke, whitesmoke, plum);

  `

function Header() {
  return <Title>Todo Application</Title>
}

export default Header;