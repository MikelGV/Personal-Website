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
  background-color: rgba(0, 0, 0, 0.2);
  width: 400px;
`;

const Left = styled.div`
  background-color: rgba(0, 0, 0, 0.01);
  width: 300px;
  float: left;
`;

const LeftButton = styled.button``;

const Text = styled.span``;

const Right = styled.div`
  
  float: right;
`;

const RightTitle = styled.h3``;

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
              <Text>TEST</Text>
            </LeftButton>
          </Left>
          <Right>
            <RightTitle>Test</RightTitle>
            <TimeStamp>01/12/2022</TimeStamp>
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