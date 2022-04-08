import React from 'react'
import styled from 'styled-components'

const Container = styled.div`
  display: flex;
  height: 100vh;
  width: 100%;
  align-items: center;
  flex-direction: column;
`;

const Wrapper = styled.div`
  display: flex;
  width: 50%;
`;

const Title = styled.h1`
  margin-right: 10px;
  color: #ade8f4;
`;

const Text = styled.span`
  max-width: 300px;
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
        <Text>Hello! My name is Mikel and I enjoy creating things that live on the internet. My interest in development started back in 2019 when my brother showed me what he was learning and i decided to try it - turns out that i like it and i learn HTML & CSS! </Text>
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