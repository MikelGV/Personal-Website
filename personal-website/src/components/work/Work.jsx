import React from 'react'
import styled from 'styled-components'

const Container = styled.div`
  width: 100%;
  height: 50vh;
  margin-top: 30vh;
`;

const Wrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
`;

const Title = styled.h1`
  color: #48cae4;
`;

const Line = styled.hr`
  border-right: 55vh solid #ade8f4;
  margin-bottom: 20px;
`;

const ProjectWrapper = styled.div`
  flex: 1;
  margin: 5px;
  min-width: 280px;
  height: 50px;
  display: flex;
  align-items: center;
  justify-content: center;
  position: relative;
  &:hover ${Container}{
    opacity: 1;
  }
`;

const Project = styled.div`
  margin-right: 10px;
`;

const ProjectImg = styled.img`
  width: 30vh;
  height: 30vh;
  object-fit: cover;
  cursor: pointer;
`;

const ProjectTitle = styled.h2`
  color: #ade8f4;
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
            <ProjectImg src='/assets/E-shop.png' />
            <ProjectTitle>Social Media</ProjectTitle>
            <ProjectTech>
              <Tech>Express</Tech>
              <Tech>React</Tech>
              <Tech>Heroku</Tech>
            </ProjectTech>
          </Project>
          <Project>
            <ProjectImg src='/assets/E-shop.png' />
            <ProjectTitle>E-shop</ProjectTitle>
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