import React from 'react'
import styled, {keyframes} from 'styled-components'
import { Link } from 'react-router-dom'

const fadeIn = keyframes`
  0% {
    opacity: 0;
  }

  100% {
    opacity: 1;
  }
`;


const Container = styled.div`
  height: 60px;
  margin-top: 20px;
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
  animation: 1s ${fadeIn} ease-in;
`;

const Right = styled.div`
  flex: 1;
  display: flex;
  align-items: center;
  justify-content: flex-end;
`;

const MenuItem = styled.a`
  font-size: 17px;
  cursor: pointer;
  margin-left: 25px;
  color: white;
  text-decoration: none;
  animation: 2s ${fadeIn} ease-in;
  :hover {
    color: #5bc0be;
  }
`;

const Button = styled.a`
  font-size: 17px;
  background-color: transparent;
  padding: 0.55rem 1rem;
  border-radius: 5px;
  border: #caf0f8 solid 2px;
  margin-left: 25px;
  color: #caf0f8;
  cursor: pointer;
  text-decoration: none;
  animation: 3s ${fadeIn} ease-in;
  :hover {
    color: #5bc0be;
    border-color: #5bc0be;
  }
`;

const TopBar = () => {
  return (
    <Container>
      <Wrapper>
        <Left>
          <Link to={'/'}>
            <Logo>MG</Logo>
          </Link>
        </Left>
        <Right>
          <MenuItem href='#about'>About</MenuItem>
          <MenuItem href='#work'>Work</MenuItem>
          {/* <MenuItem>Experience</MenuItem> */}
          <MenuItem href='#Contact'>Contact</MenuItem>
          <Button href='/assets/resume.pdf'>Resume</Button>
        </Right>
      </Wrapper>
    </Container>
  )
}

export default TopBar