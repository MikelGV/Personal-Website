'use client';
import React, { useEffect, useRef, useState } from 'react'
import styled from 'styled-components'
import { Mobile } from '../../lib/responsive'

const Container = styled.div`
  display: flex;
  width: 100%;
  height: 80vh;
  ${Mobile({
      width: "42%",
      "margin-top": "25vh",
  })}
`;

const Wrapper = styled.div`
  flex: 1;
  display: flex;
  margin-top: 100px;
  align-items: center;
  flex-direction: column;
  transform: translateY(20vh);
  opacity: 0;
  visibility: hidden;
  transition: opacity 3s ease-out, transform 2.2s ease-out;
  will-change: opacity, visibility;
  &.is-visible {
    opacity: 1;
    transform: none;
    visibility: visible;
  }
`;

const Title = styled.h1`
  font-size: 40px;
  font-weight: 300;
  color: #ade8f4;
`;

const Line = styled.hr`
  border-right: 15vh solid #ade8f4;
  margin-bottom: 10px;
`;

const AboutWrapper = styled.div`
  border: 5px solid #001233;
`;

const Text = styled.span`
  display: flex;
  font-size: 20px;
  max-width: 520px;
  margin-left: 10px;
  color: #0096c7;

`;

const TechnologyWrapper = styled.div`
  display: flex;
  align-items: center;
  flex-direction: column;
  margin-top: 10px;
  
`;

const Technology = styled.ul`
  display: grid;
  grid-template-columns: 200px 1fr;
  grid-gap: 16px;
  list-style: none;

`;

const Tech = styled.li`
  font-size: 18px;
  color: #ade8f4;
  
`;

export default function About() {
  const [isVisible, setIsVisible] = useState(false);
  const domRef = useRef();

  useEffect(() => {
    const observer = new IntersectionObserver(entries => {
      entries.forEach(entry => setIsVisible(entry.isIntersecting));
    });
    observer.observe(domRef.current);
    return () => observer.unobserve(domRef.current);
  }, []);

  return (
    <Container id='about'>
      <Wrapper ref={domRef} className={isVisible ? "is-visible" : ""}>
        <Title>About</Title>
        <Line></Line>
        <AboutWrapper>
          <Text>Hello! My name is Mikel and I enjoy creating things that live on the internet. My interest in development started back in 2019 when my brother showed me what he was learning and i decided to try it - turns out that i liked it and i learnt HTML & CSS! </Text>
          <Text>Fast-forward to today, and I've had the privilege to spand my knowledge helping friends build their own projects. My main goal is helping others building websites.</Text>
          <Text>Here are a few technologies I've been working with recently:</Text>
        </AboutWrapper>
        <TechnologyWrapper>
          <Technology>
            <Tech>Golang</Tech>
            <Tech>TypeScript</Tech>
            <Tech>Python</Tech>
            <Tech>Docker</Tech>
          </Technology>
        </TechnologyWrapper>
      </Wrapper>
    </Container>
  )
}
