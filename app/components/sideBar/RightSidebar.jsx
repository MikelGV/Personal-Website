'use client';
import { Mobile } from '@/app/lib/responsive';
import styled, {keyframes} from 'styled-components';


const fadeIn = keyframes`
  0% {
    opacity: 0;
  }

  100% {
    opacity: 1;
  }
`;

const Container = styled.div`
  height: calc(13vh - 13px);
  top: 60vh;
  max-width: 50px;
  position: sticky;
  animation: 1s ${fadeIn} ease-in;
  ${Mobile({display: "none"})}
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
  color: #48cae1;
`;

const Line = styled.div`
  position: absolute;
  left: 50%;
  top: 28vh;
  border-right: 3px solid #48cae1;
  height: 100%;
`;

export default function RightSidebar() {
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

