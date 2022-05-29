import React, { useEffect, useRef, useState } from 'react'
import styled from 'styled-components'
import GitHubIcon from '@mui/icons-material/GitHub';

const Container = styled.div`
  width: 100%;
  height: 90vh;
  display: flex;
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

const Title = styled.h1`
  color: #48cae4;
  font-size: 40px;
  font-weight: 300;
`;

const Line = styled.hr`
  border-right: 40vh solid #ade8f4;
  margin-bottom: 20px;
`;

const Project = styled.div`
  display: flex;
  border: 10px solid #001233;
`;

const ProjectLink = styled.a``;

const ProjectImg = styled.img`
  width: 30vh;
  height: 30vh;
  object-fit: cover;
  cursor: pointer;
`;
const Info = styled.div`
  margin-left: 10px;
  background-color: rgba(0, 0, 0, 0.2);
`;

const ProjectTitle = styled.a`
  color: #ade8f4;
  font-size: 24px;
  font-weight: 500;
  text-decoration: none;
  width: 150px;
  background-color: rgba(0, 0, 0, 0.01);
  :hover {
    color: #5bc0be;
  }
`;

const ProjectDesc = styled.span`
  color: #00b4d8;
  background-color: rgba(0, 0, 0, 0.01);
  display: flex;
  max-width: 350px;
`;

const ProjectTech = styled.ul`
  display: grid;
  grid-template-columns: 125px 1fr;
  grid-gap: 16px;
  list-style: none;
  background-color: rgba(0, 0, 0, 0.01);
`;

const Tech = styled.li`
  font-size: 15px;
  color: #48cae4;
  margin-top: 10px;
  background-color: rgba(0, 0, 0, 0.01);
`;


const Work = () => {
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
    <Container id='work' ref={domRef} className={isVisible ? "is-visible" : ""}>
      <Wrapper>
        <Title>Some  Things I've Built</Title>
        <Line />
          <Project>
            <ProjectLink href='' target='_blank'>
              <ProjectImg src='/assets/SocialMedia.png' />
            </ProjectLink>
            <Info>
              <ProjectTitle href=''>Social Media</ProjectTitle>
              <ProjectDesc>Social Media app that replicates the core Facebook functionalities, like posting photos and following other users. Technologies used:</ProjectDesc>
              <ProjectTech>
                <Tech>Express</Tech>
                <Tech>React</Tech>
                <Tech>Heroku</Tech>
              </ProjectTech>
              <ProjectLink href='https://github.com/MikelGV/Social-Media' target='_blank'>
                <GitHubIcon style={{color: "white", marginLeft: 10, marginTop: 10}}/>
              </ProjectLink>
            </Info>
          </Project>
          <Project>
          <ProjectLink href='' target='_blank'>
            <ProjectImg src='/assets/E-shop.png' />
          </ProjectLink>
            <Info>
              <ProjectTitle href=''>E-shop</ProjectTitle>
              <ProjectDesc>Web app for buying and selling clothes. Technologies used:</ProjectDesc>
              <ProjectTech>
                <Tech>Express</Tech>
                <Tech>React</Tech>
                <Tech>Styled-componets</Tech>
                <Tech>Heroku</Tech>
              </ProjectTech>
              <ProjectLink href='https://github.com/MikelGV/e-commerce-front-end' target='_blank'>
                <GitHubIcon style={{color: "white", marginLeft: 10, marginTop: 10}}/>
              </ProjectLink>
            </Info>
          </Project>
      </Wrapper>
    </Container>
  )
}

export default Work