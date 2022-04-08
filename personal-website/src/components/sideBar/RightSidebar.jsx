import React from 'react'
import styled from 'styled-components'


const Container = styled.div`
  height: calc(10vh - 10px);
  top: 60vh;
  position: sticky;
`;

const Wrapper = styled.div`
  display: flex;
`;

const TextWrapper = styled.div`
  padding: 0px;
`;

const Text = styled.p`
  padding: 10px;
  transform: rotate(90deg);
  margin-bottom: 100px;
  cursor: pointer;
  color: #48cae1;
`;

const Line = styled.div`
  position: absolute;
  left: 50%;
  border-right: 3px solid #48cae1;
  height: 247px;
`;

const RightSidebar = () => {
  return (
    <Container>
      <Wrapper>
        <TextWrapper>
            <Text>mikelgaldosv@gmail.com</Text>
            <Line></Line>
        </TextWrapper>
      </Wrapper>
    </Container>
  )
}

export default RightSidebar