import React from 'react'
import styled from 'styled-components'
import GitHubIcon from '@mui/icons-material/GitHub';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import InstagramIcon from '@mui/icons-material/Instagram';

const Container = styled.div`
  height: calc(10vh - 10px);
  top: 60vh;
  position: sticky;
`;

const Wrapper = styled.div`
  display: flex;
`;

const List = styled.ul`
  flex-direction: column;
  padding: 0px;
`;

const ListItem = styled.li`
  padding: 10px;
  cursor: pointer;
  color: #48cae1;
  list-style: none;
  align-items: center;
`;

const Line = styled.div`
  position: absolute;
  left: 50%;
  border-left: 3px solid #48cae1;
  height: 240px;
`;
const LeftSideBar = () => {
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
          <Line></Line>
        </List>
      </Wrapper>
    </Container>
  )
}

export default LeftSideBar