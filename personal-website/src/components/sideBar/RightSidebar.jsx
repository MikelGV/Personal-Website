import React from 'react'
import styled from 'styled-components'


const Container = styled.div`
  height: calc(13vh - 13px);
  top: 60vh;
  max-width: 50px;
  position: sticky;
`;

const Wrapper = styled.div`
  display: flex;
  max-width: 50px;
`;

const TextWrapper = styled.div`
  padding: 0px;
  max-width: 50px;
`;

const Text = styled.p`
  padding: 10px;
  transform: rotate(90deg);
  cursor: pointer;
  color: #48cae1;
`;

const Line = styled.div`
  position: absolute;
  left: 50%;
  top: 28vh;
  border-right: 3px solid #48cae1;
  height: 100%;
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