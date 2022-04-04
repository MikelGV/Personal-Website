import React from 'react'
import styled from 'styled-components'

const Container = styled.div`
    height: 30vh;
    width: 100%;
    background-color: #023047;
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
`;

const Wrapper = styled.div`
    height: 100%;
    display: flex;
`;

const TitleContainer = styled.div`
    flex: 1;
    margin-top: 20vh;
`;

const Title = styled.h1`
    display: flex;
    color: #ade8f4;
    font-size: 40px;
    font-weight: 200;
`;

const Title2 = styled.h2`
    font-size: 60px;
    color: #48cae4;
`;

const Title3 = styled.h3`
    font-size: 60px; 
    color: #00b4d8;
    line-height: 0.9;
`;

const Title4 = styled.span`
    display: flex;
    margin-top: 10px;
    font-size: 20px;
    max-width: 640px;
    color: #0096c7;
`;



const Landing = () => {
  return (
    <Container>
        <Wrapper>
            <TitleContainer>
                <Title>Hi, my name is</Title>
                <Title2>Mikel Galdos.</Title2>
                <Title3>I build things for the web.</Title3>
                <Title4>I'm a software developer who builds exceptional digital experiences. Currently, I'm focused on building accessible, human-centered products.</Title4>
            </TitleContainer>
        </Wrapper>
    </Container>
  )
}

export default Landing