import React from 'react'
import styled from 'styled-components'

const Container = styled.div`
  flex: 1;
  width: 100%;
  height: 50vh;
  
`;

const Wrapper = styled.div`
  display: flex;
  align-items: center;
  flex-direction: column;
`;

const Title = styled.h1`
  color: #ade8f4;
`;

const Line = styled.hr`
  border-right: 20vh solid #ade8f4;
`;

const Text = styled.span`
  display: flex;
  max-width: 430px;
  color: #0096c7;
`;

const TechnologyWrapper = styled.ul``;

const Tech = styled.li`
  color: #0096c7;
`;

const About = () => {
  return (
    <Container>
      <Wrapper>
        <Title>About</Title>
        <Line></Line>
        <Text>Hello! My name is Mikel and I enjoy creating things that live on the internet. My interest in development started back in 2019 when my brother showed me what he was learning and i decided to try it - turns out that i liked it and i learnt HTML & CSS! </Text>
        <Text>Fast-forward to today, and I've had the privilege to spand my knowledge helping friends build their own projects. My main goal is helping others building websites.</Text>
        <Text>Here are a few technologies I've been working with recently:</Text>
        <TechnologyWrapper>
          <Tech>JavaScript (ES6+)</Tech>
          <Tech>React</Tech>
          <Tech>NodeJs</Tech>
          <Tech>Python</Tech>
        </TechnologyWrapper>
      </Wrapper>
    </Container>
  )
}

export default About