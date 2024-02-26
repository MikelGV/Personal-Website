'use client';
import { Mobile } from '@/app/lib/responsive';
import styled from 'styled-components'

const Container = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  ${Mobile({
      display: "initial",
  })}
`;

const Center = styled.div`
  padding: 20px;
`;

const Item = styled.div`
  margin-top: 20px;
  color: #ade8f4;
`;

export default function Footer() {
  return (
    <Container>
      <Center>
        <Item>Designed and built by Mikel Galdos.</Item>
      </Center>
    </Container>
  )
}
