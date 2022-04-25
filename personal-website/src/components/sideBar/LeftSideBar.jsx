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

const ListItems = styled.li`
  padding: 10px;
  cursor: pointer;
  color: #48cae1;
  list-style: none;
`;

const ListItem = styled.a`
  color: #48cae1;
  text-decoration: none;
  :hover {
    color: #5bc0be;
  }
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
          <ListItems>
            <ListItem href='https://github.com/MikelGV' target="_blank">
              <GitHubIcon/>
            </ListItem>
          </ListItems>
          <ListItems>
            <ListItem href='https://www.linkedin.com/in/mikel-galdos-vargas-ab8050187/' target="_blank">
              <LinkedInIcon/>
            </ListItem>
          </ListItems>
          <ListItems>
            <ListItem href='https://www.instagram.com/mikelgaldosv' target="_blank">
              <InstagramIcon/>
            </ListItem>
          </ListItems>
          <Line></Line>
        </List>
      </Wrapper>
    </Container>
  )
}

export default LeftSideBar