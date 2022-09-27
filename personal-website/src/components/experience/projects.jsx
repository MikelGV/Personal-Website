import React from 'react'
import styled from 'styled-components';


const Container = styled.div``;

const Project = styled.div``;

const RightTitle = styled.h3`
  color: #90e0ef;
`;

const TimeStamp = styled.p`
  color: #90e0ef;
  font-size: 15px;
  font-weight: 300;
`;

const ListWrapper = styled.div`
  list-style: none;
`;

const List = styled.ul``;

const Item = styled.li`
  color: #00b4d8;
  margin-bottom: 5px;
`;

function Projects() {
  return (
        <Container>
            <Project id='0'>
                <RightTitle>Contributed at <a href="https://www.tooljet.com/" target="_blank" style={{textDecoration: "none", color:"#90e0ef"}}>ToolJet</a></RightTitle>
                <ListWrapper>
                <Item>What is ToolJet:</Item>
                <Item>ToolJet is an open-source low-code framework to build and deploy internal tools quickly without much effort from the engineering teams.</Item>
                <List>
                    <Item>Worked at <a href="https://github.com/ToolJet/ToolJet/issues/3181" target="_blank" style={{textDecoration:"none", color:"#00b4d8"}}>#3181</a> issue. Default value in text widget deleted.</Item>
                </List>
                </ListWrapper>
            </Project>
            <Project id='1'>
                <RightTitle>Worked as Freelancer</RightTitle>
                <TimeStamp>January 2020 - June 2022</TimeStamp>
                <ListWrapper>
                <List>
                    <Item>Providing a range of web development services to numberous clients on a freelance basis; from creating web apps to website builds and rebuilds.</Item>
                    <Item>Key projects: Build of a E-commerce website (front and back end) using NodeJs and MongoDb</Item>
                </List>
                </ListWrapper>
            </Project>
            <Project id='2'>
                <RightTitle>Contributed at TEST</RightTitle>
                <ListWrapper>
                <List>
                    <Item>Lorem ipsum dolor sit amet consectetur adipisicing elit.</Item>
                    <Item>Lorem ipsum dolor sit amet consectetur adipisicing elit. A obcaecati impedit voluptate aliquid. netflix, youtube, twitter.</Item>
                </List>
                </ListWrapper>
            </Project>
        </Container>
  )
}

export default Projects