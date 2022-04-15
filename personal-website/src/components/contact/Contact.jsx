import React from 'react'
import styled from 'styled-components'


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

const FormWrapper = styled.div`
  display: flex;
  height: 100%;
  align-items: center;
  background-color: rgba(0,0,0, 0.2);
`;

const Form = styled.form`
  background-color: rgba(0,0,0, 0.2);
`;

const Name = styled.input`
  background-color: rgba(0,0,0, 0.2);
  border: 1px solid white;
  ::placeholder {
    color: #ade8f4;
  }
`;

const Email = styled.input`
  background-color: rgba(0,0,0, 0.2);
  ::placeholder {
    color: #ade8f4;
  }
`;

const Message = styled.textarea`
  background-color: rgba(0,0,0, 0.2);
  ::placeholder {
    color: #ade8f4;
  }
`;

const Button = styled.button`
  color: white;
`;


const Contact = () => {
  return (
    <Container>
      <Wrapper>
        <FormWrapper>
          <Form>
            <Name placeholder='Name'/>
            <Email placeholder='Email'/>
            <Message placeholder='Ask me anything'/>
            <Button>Send</Button>
          </Form>
        </FormWrapper>
      </Wrapper>
    </Container>
  )
}

export default Contact