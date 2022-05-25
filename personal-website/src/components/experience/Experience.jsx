import React from 'react'
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

const Title = styled.h1`
  color: #48cae4;
  font-size: 40px;
  font-weight: 300;
`;

const Line = styled.hr`
  border-right: 20vh solid #ade8f4;
  margin-bottom: 20px;
`;

const ExperienceWrapper = styled.div`
  width: 400px;
  height: 400px;
  overflow: hidden;
`;

const Left = styled.div`
  width: 150px;
  float: left;
`;

const LeftButton = styled.button`
  width: 100px;
  border: none;
  border-left: 2px solid white;
  color: #00b4d8;
  font-size: 18px;
  :hover {
    background-color: #001845;
  }
`;

const Right = styled.div`
  float: left;
`;

const RightTitle = styled.h3`
  color: #90e0ef;
`;

const TimeStamp = styled.p``;

const ListWrapper = styled.div``;

const List = styled.ul``;

const Item = styled.li``;

const Experience = () => {
  return (
    <Container>
      <Wrapper>
        <Title>Experience</Title>
        <Line/>
        <ExperienceWrapper>
          <Left>
            <LeftButton>
              TEST
            </LeftButton>
          </Left>
          <Right>
            <RightTitle>Contributed at @test</RightTitle>
            <ListWrapper>
              <List>
                <Item></Item>
              </List>
            </ListWrapper>
          </Right>
        </ExperienceWrapper>
      </Wrapper>
    </Container>
  )
}

export default Experience