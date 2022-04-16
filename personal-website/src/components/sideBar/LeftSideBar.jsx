import React from 'react'
import styled from 'styled-components'
import GitHubIcon from '@mui/icons-material/GitHub';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import InstagramIcon from '@mui/icons-material/Instagram';

const Container = styled.div`
  height: calc(13vh - 13px);
  top: 76vh;
  position: sticky;
`;

const Wrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
`;

const List = styled.ul`
  padding: 0px;
`;

const ListItem = styled.li`
  padding: 10px;
  cursor: pointer;
  color: #48cae1;
  list-style: none;
`;

const Line = styled.div`
  position: absolute;
  left: 50%;
  top: 18vh;
  border-left: 3px solid #48cae1;
  height: 50%;
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