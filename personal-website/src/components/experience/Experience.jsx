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

const ExperienceWrapper = styled.div``;

const LeftWrapper = styled.div``;

const Left = styled.div``;

const LeftButton = styled.button``;

const RightWrapper = styled.div``;

const Right = styled.div``;

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
        <ExperienceWrapper>
          <LeftWrapper>
            <Left>
              <LeftButton></LeftButton>
            </Left>
          </LeftWrapper>
          <RightWrapper>
            <Right>
              <RightTitle>Test</RightTitle>
              <TimeStamp>01/12/2022</TimeStamp>
              <ListWrapper>
                <List>
                  <Item></Item>
                </List>
              </ListWrapper>
            </Right>
          </RightWrapper>
        </ExperienceWrapper>
      </Wrapper>
    </Container>
  )
}

export default Experience