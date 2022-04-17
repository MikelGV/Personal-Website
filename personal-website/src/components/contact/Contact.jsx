import React, { useRef } from 'react'
import styled from 'styled-components'
import emailjs from '@emailjs/browser'

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
  height: 75%;
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
  color: white;
  margin-top: 50px;
  width: 60%;
  height: 50px;
  border: 1px solid white;
  ::placeholder {
    color: #ade8f4;
  }
`;

const Email = styled.input`
  background-color: rgba(0,0,0, 0.2);
  color: white;
  margin-top: 30px;
  margin-bottom: 30px;
  width: 60%;
  height: 50px;
  ::placeholder {
    color: #ade8f4;
  }
`;

const Subject = styled.input`
  background-color: rgba(0,0,0, 0.2);
  color: white;
  margin-bottom: 30px;
  width: 60%;
  height: 50px;
  ::placeholder {
    color: #ade8f4;
  }
`;

const Message = styled.textarea`
  width: 60%;
  background-color: rgba(0,0,0, 0.2);
  color: white;
  margin-bottom: 30px;
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

const PUBLIC_KEYS = process.env.REACT_APP_PUBLIC_KEY;
const TEMPLATE_KEYS = process.env.REACT_APP_TEMPLATE_KEY;

const Contact = () => {
  const form = useRef();
  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm('gmail', `${TEMPLATE_KEYS}`, form.current, `${PUBLIC_KEYS}`)
      .then((result) => {
          console.log(result.text);
      }, (error) => {
          console.log(error.text);
      });
  };
  return (
    <Container>
      <Wrapper>
        <FormWrapper>
          <ContactMe>Contact</ContactMe>
          <Line></Line>
          <Form ref={form} onSubmit={sendEmail}>
            <Name placeholder='Name' name='name'/>
            <Email placeholder='Email' name='email'/>
            <Subject placeholder='Subject' name='subject'/>
            <Message placeholder='Ask me anything' name='message'/>
            <Button type='submit'>Send</Button>
          </Form>
        </FormWrapper>
      </Wrapper>
    </Container>
  )
}

export default Contact