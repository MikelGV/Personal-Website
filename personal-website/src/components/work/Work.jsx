import React from 'react'
import styled from 'styled-components'
import GitHubIcon from '@mui/icons-material/GitHub';

const Container = styled.div`
  width: 100%;
  height: 90vh;
  display: flex;
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
  border-right: 40vh solid #ade8f4;
  margin-bottom: 20px;
`;

const Project = styled.div`
  display: flex;
  border: 10px solid #001233;
`;

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

const ProjectTitle = styled.h2`
  color: #ade8f4;
  width: 150px;
  background-color: rgba(0, 0, 0, 0.01);
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
  return (
    <Container id='work'>
      <Wrapper>
        <Title>Some  Things I've Built</Title>
        <Line />
          <Project>
            <ProjectImg src='/assets/SocialMedia.png' />
            <Info>
              <ProjectTitle>Social Media</ProjectTitle>
              <ProjectDesc>Social Media app that replicates the core Facebook functionalities, like posting photos and following other users. Technologies used:</ProjectDesc>
              <ProjectTech>
                <Tech>Express</Tech>
                <Tech>React</Tech>
                <Tech>Heroku</Tech>
              </ProjectTech>
              <GitHubIcon style={{color: "white", marginLeft: 10, marginTop: 10}}/>
            </Info>
          </Project>
          <Project>
            <ProjectImg src='/assets/E-shop.png' />
            <Info>
              <ProjectTitle>E-shop</ProjectTitle>
              <ProjectDesc>Web app for buying and selling clothes. Technologies used:</ProjectDesc>
              <ProjectTech>
                <Tech>Express</Tech>
                <Tech>React</Tech>
                <Tech>Styled-componets</Tech>
                <Tech>Heroku</Tech>
              </ProjectTech>
              <GitHubIcon style={{color: "white", marginLeft: 10, marginTop: 10}}/>
            </Info>
          </Project>
      </Wrapper>
    </Container>
  )
}

export default Work