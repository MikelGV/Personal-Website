import React, { useState, useEffect, useRef } from 'react'
import styled from 'styled-components';


const Container = styled.div`
  display: flex;
  width: 100%;
  height: 90vh;
  align-items: center;
  justify-content: center;
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

const ListWrapper = styled.div`
  list-style: none;
`;

const List = styled.ul``;

const Item = styled.li`
  color: #00b4d8;
  margin-bottom: 5px;
`;

const Experience = () => {
  const [isVisible, setIsVisible] = useState(false);
  const domRef = useRef();

  useEffect(() => {
    const observer = new IntersectionObserver(entries => {
      entries.forEach(entry => setIsVisible(entry.isIntersecting));
    });
    observer.observe(domRef.current);
    return () => observer.unobserve(domRef.current);
  }, []);

  const [isActive, setIsActive] = useState(false);
  const hideRef = useRef();

  const toggleHide = () => {
    const observer = new IntersectionObserver(entries => {
      entries.forEach(entry => setIsActive(entry.isIntersecting));
    });
    observer.observe(hideRef.current);
    return () => observer.unobserve(hideRef.current);
  };

  return (
    <Container id='Experince' ref={domRef} className={isVisible ? "is-visible" : ""}>
      <Wrapper>
        <Title>Experience & Open Source</Title>
        <Line/>
        <ExperienceWrapper>
          <Left>
            <LeftButton ref={hideRef} onClick={toggleHide}>
              ToolJet
            </LeftButton>
            <LeftButton ref={hideRef} onClick={toggleHide}>
              TEST
            </LeftButton>
            <LeftButton ref={hideRef} onClick={toggleHide}>
              TEST
            </LeftButton>
            <LeftButton ref={hideRef} onClick={toggleHide}>
              TEST
            </LeftButton>
            <LeftButton onClick={toggleHide}>
              TEST
            </LeftButton>
          </Left>
          <Right>
            <Project style={{display: isActive ? "none" : "block"}}>
              <RightTitle>Contributed at <a href="https://www.tooljet.com/" target="_blank" style={{textDecoration: "none", color:"#90e0ef"}}>ToolJet</a></RightTitle>
              <ListWrapper>
                <Item>What is ToolJet:</Item>
                <Item>ToolJet is an open-source low-code framework to build and deploy internal tools quickly without much effort from the engineering teams.</Item>
                <List>
                  <Item>Worked at <a href="https://github.com/ToolJet/ToolJet/issues/3181" target="_blank" style={{textDecoration:"none", color:"#00b4d8"}}>#3181</a> issue. Default value in text widget deleted.</Item>
                </List>
              </ListWrapper>
            </Project>
            <Project style={{display: isActive ? "block" : "none"}}>
              <RightTitle>Contributed at TEST</RightTitle>
              <ListWrapper>
                <List>
                  <Item>Default value in text widget deleted.</Item>
                  <Item>Lorem ipsum dolor sit amet consectetur adipisicing elit. A obcaecati impedit voluptate aliquid. netflix, youtube, twitter.</Item>
                </List>
              </ListWrapper>
            </Project>
            <Project style={{display: isActive ? "block" : "none"}}>
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