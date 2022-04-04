import React from 'react'
import styled from 'styled-components'
import GitHubIcon from '@mui/icons-material/GitHub';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import InstagramIcon from '@mui/icons-material/Instagram';

const Container = styled.div`
  width: 40px;
  position: flex;
  bottom: 0px;
  left: 40px;
  right: auto;
  z-index: 10;
`;

const Wrapper = styled.div`
  flex: 1;
`;

const List = styled.ul`
  display: flex;
  flex-direction: column;
  -moz-box-align: center;
  padding: 0px;
  list-style: none;
`;

const ListItem = styled.li`
  padding: 10px;
  cursor: pointer;
  color: white;
  display: flex;
  align-items: center;
  border-radius: 10px;
`;

const SideBar = () => {
  return (
    <Container>
      <Wrapper>
        <List>
          <ListItem>
            <GitHubIcon/>
          </ListItem>
          <ListItem>
            <LinkedInIcon/>
          </ListItem>
          <ListItem>
            <InstagramIcon/>
          </ListItem>
        </List>
      </Wrapper>
    </Container>
  )
}

export default SideBar