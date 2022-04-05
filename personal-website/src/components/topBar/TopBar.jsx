import React from 'react'
import styled from 'styled-components'

const Container = styled.div`
  height: 60px;
`;

const Wrapper = styled.div`
  padding: 10px 20px;
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

const Left = styled.div`
  flex: 1;
  display: flex;
  align-items: center;
`;

const Logo = styled.h1`
  font-weight: bold;
  font-size: 25px;
  color: white;
  cursor: pointer;
`;

const Right = styled.div`
  flex: 1;
  display: flex;
  align-items: center;
  justify-content: flex-end;
`;

const MenuItem = styled.div`
  font-size: 17px;
  cursor: pointer;
  margin-left: 25px;
  color: white;
`;

const Button = styled.button`
  font-size: 17px;
  background-color: transparent;
  border-radius: 5px;
  border: #caf0f8 solid 2px;
  margin-left: 25px;
  color: #caf0f8;
  cursor: pointer;
`;

const TopBar = () => {
  return (
    <Container>
      <Wrapper>
        <Left>
          <Logo>MG</Logo>
        </Left>
        <Right>
          <MenuItem>About</MenuItem>
          <MenuItem>Work</MenuItem>
          <MenuItem>Experience</MenuItem>
          <MenuItem>Contact</MenuItem>
          <Button>Resume</Button>
        </Right>
      </Wrapper>
    </Container>
  )
}

export default TopBar