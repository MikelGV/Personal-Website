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

const ContactMe = styled.h2`
  display: flex;
  align-items: center;
  justify-content: center;
  color: #48cae4;
  font-size: 40px;
  font-weight: 300;
`;

const Line = styled.hr`
  border-right: 20vh solid #ade8f4;
`;

const FormWrapper = styled.div`
  height: 50%;
  width: 40%;
  background-color: rgba(0,0,0, 0.2);
`;

const Form = styled.form`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  background-color: rgba(0,0,0, 0.01);
`;

const Name = styled.input`
  background-color: rgba(0,0,0, 0.2);
  margin-top: 60px;
  width: 60%;
  height: 50px;
  border: 1px solid white;
  ::placeholder {
    color: #ade8f4;
  }
`;

const Email = styled.input`
  background-color: rgba(0,0,0, 0.2);
  margin-top: 10px;
  margin-bottom: 10px;
  width: 60%;
  height: 50px;
  ::placeholder {
    color: #ade8f4;
  }
`;

const Message = styled.textarea`
  width: 60%;
  background-color: rgba(0,0,0, 0.2);
  margin-bottom: 20px;
  resize: none;
  ::placeholder {
    color: #ade8f4;
  }
`;

const Button = styled.button`
  border: 2px solid white;
  width: 50%;
  height: 40px;
  color: #ade8f4;
  background-color: rgba(0,0,0, 0.2);
  text-align: center;
  transition: all 0.15s;
  cursor: pointer;
  :hover {
    color: #DDDDDD;
    border-color: #DDDDDD;
  }
  :active {
    color:#BBBBBB;
    border-color: #BBBBBB;
  }
`;


const Contact = () => {
  return (
    <Container>
      <Wrapper>
        <FormWrapper>
          <ContactMe>Contact</ContactMe>
          <Line></Line>
          <Form>
            <Name placeholder='Name' name='name'/>
            <Email placeholder='Email' name='email'/>
            <Message placeholder='Ask me anything' name='message'/>
            <Button>Send</Button>
          </Form>
        </FormWrapper>
      </Wrapper>
    </Container>
  )
}

export default Contact