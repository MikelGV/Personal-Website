import React, { useState } from 'react'
import styled from 'styled-components';


const Container = styled.div`
  display: flex;
  width: 100%;
  height: 90vh;
  align-items: center;
  justify-content: center;
`;

const Wrapper = styled.div`
  flex: 1;
  margin: 5px;
  min-width: 280px;
  height: 90vh;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
`;

const Project = styled.div``;

const Title = styled.h1`
  color: #48cae4;
  font-size: 40px;
  font-weight: 300;
`;

const Line = styled.hr`
  border-right: 55vh solid #ade8f4;
  margin-bottom: 20px;
`;

const ExperienceWrapper = styled.div`
  width: 600px;
  overflow: hidden;
  margin-left: 130px;
`;

const Left = styled.div`
  width: 150px;
  float: left;
`;

const LeftButton = styled.button`
  width: 100px;
  border: none;
  border-left: 3px solid #002855;
  color: #00b4d8;
  font-size: 19px;
  :hover {
    background-color: #001845;
  }
`;

const Right = styled.div`
  max-width: 350px;
  float: left;
`;

const RightTitle = styled.h3`
  color: #90e0ef;
`;

const TimeStamp = styled.p``;

const ListWrapper = styled.div``;

const List = styled.ul``;

const Item = styled.li`
  color: #00b4d8;
  margin-bottom: 5px;
`;

const Experience = () => {
  const [hide, setHide] = useState(false);
  const [hide2, setHide2] = useState(false);
  const [hide3, setHide3] = useState(false);
  

  const toggleHide = () => {
    setHide(!hide);
  };
  const toggleHide2 = () => {
    setHide2(!hide2);
  };
  const toggleHide3 = () => {
    setHide3(!hide3);
  };

  return (
    <Container>
      <Wrapper>
        <Title>Experience & Contributions</Title>
        <Line/>
        <ExperienceWrapper>
          <Left>
            <LeftButton onClick={toggleHide}>
              ToolJet
            </LeftButton>
            <LeftButton onClick={toggleHide2}>
              TEST
            </LeftButton>
            <LeftButton onClick={toggleHide3}>
              TEST
            </LeftButton>
            <LeftButton onClick={toggleHide}>
              TEST
            </LeftButton>
            <LeftButton onClick={toggleHide}>
              TEST
            </LeftButton>
          </Left>
          <Right>
            <Project style={{display: hide ? "none" : "block"}}>
              <RightTitle>Contributed at ToolJet</RightTitle>
              <ListWrapper>
                <List>
                  <Item>Default value in text widget deleted.</Item>
                  <Item>Lorem ipsum dolor sit amet consectetur adipisicing elit. A obcaecati impedit voluptate aliquid. netflix, youtube, twitter.</Item>
                </List>
              </ListWrapper>
            </Project>
            <Project style={{display: hide2 ? "block" : "none"}}>
              <RightTitle>Contributed at TEST</RightTitle>
              <ListWrapper>
                <List>
                  <Item>Default value in text widget deleted.</Item>
                  <Item>Lorem ipsum dolor sit amet consectetur adipisicing elit. A obcaecati impedit voluptate aliquid. netflix, youtube, twitter.</Item>
                </List>
              </ListWrapper>
            </Project>
            <Project style={{display: hide3 ? "block" : "none"}}>
              <RightTitle>Contributed at TEST</RightTitle>
              <ListWrapper>
                <List>
                  <Item>Lorem ipsum dolor sit amet consectetur adipisicing elit.</Item>
                  <Item>Lorem ipsum dolor sit amet consectetur adipisicing elit. A obcaecati impedit voluptate aliquid. netflix, youtube, twitter.</Item>
                </List>
              </ListWrapper>
            </Project>
          </Right>
        </ExperienceWrapper>
      </Wrapper>
    </Container>
  )
}

export default Experience