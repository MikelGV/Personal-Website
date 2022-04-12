import React from 'react'
import styled from 'styled-components'

const Container = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
`;

const Wrapper = styled.div``;

const Title = styled.h1`
  color: #48cae4;
`;

const Line = styled.hr`
  border-right: 30vh solid #ade8f4;
  margin-bottom: 10px;
`;

const ProjectWrapper = styled.div``;

const Project = styled.div``;

const ProjectImg = styled.img``;

const ProjectTitle = styled.h2`
  color: #ade8f4;
`;

const ProjectDescription = styled.span`
  display: flex;
  max-width: 320px;
  color: #48cae4;
`;

const ProjectTech = styled.ul``;

const Tech = styled.li`
  color: #0096c7;
`;


const Work = () => {
  return (
    <Container>
      <Wrapper>
        <Title>Some of the projects i built</Title>
        <Line />
        <ProjectWrapper>
          <Project>
            <ProjectImg src='' />
            <ProjectTitle>Social Media</ProjectTitle>
            <ProjectDescription>A web that replicates some Facebook functionalities like, create posts, liking posts and  following people.</ProjectDescription>
            <ProjectTech>
              <Tech>Express</Tech>
              <Tech>React</Tech>
              <Tech>Heroku</Tech>
            </ProjectTech>
          </Project>
          <Project>
            <ProjectImg src='' />
            <ProjectTitle>E-shop</ProjectTitle>
            <ProjectDescription>E-shop app for buying products.</ProjectDescription>
            <ProjectTech>
              <Tech>Express</Tech>
              <Tech>React</Tech>
              <Tech>Styled-componets</Tech>
              <Tech>Heroku</Tech>
            </ProjectTech>
          </Project>
        </ProjectWrapper>
      </Wrapper>
    </Container>
  )
}

export default Work