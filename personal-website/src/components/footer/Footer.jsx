import React from 'react'
import styled from 'styled-components'

const Container = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
`;

const Center = styled.div`
  padding: 20px;
`;

const Item = styled.div`
  margin-top: 20px;
  color: #ade8f4;
`;

const Footer = () => {
  return (
    <Container>
      <Center>
        <Item>Designed and built by Mikel Galdos.</Item>
      </Center>
    </Container>
  )
}

export default Footer