'use client';
import React, { useEffect, useRef, useState } from 'react'
import styled from 'styled-components'
import { Mobile } from '@/app/lib/responsive';
import { useFormState } from 'react-dom';
import { sendEmail } from '@/actions';

const Container = styled.div`
  width: 100%;
  height: 90vh;
  margin-top: 40vh;
  display: flex;
  align-items: center;
  justify-content: center;
  transform: translateY(20vh);
  opacity: 0;
  visibility: hidden;
  transition: opacity 3s ease-out, transform 2.2s ease-out;
  will-change: opacity, visibility;
  &.is-visible {
    opacity: 1;
    transform: none;
    visibility: visible;
  }
  ${Mobile({
        width: "50%",
        "margin-top": "40vh",
        "margin-bottom": "50vh",
  })}
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


export default function Contact() {
  const [isVisible, setIsVisible] = useState(false);
  const domRef = useRef();

  useEffect(() => {
    const observer = new IntersectionObserver(entries => {
      entries.forEach(entry => setIsVisible(entry.isIntersecting));
    });
    observer.observe(domRef.current);
    return () => observer.unobserve(domRef.current);
  }, []);

  const [sendEmailState, sendEmailAction] = useFormState(sendEmail)
 
  useEffect(() => {
    if(sendEmailState == true) {
        alert("email sent")
    }
    if(sendEmailState == false) {
        alert("Error sending email!")
    }
    console.log("send")
  }, [sendEmailState])

  return (
    <Container id='Contact' ref={domRef} className={isVisible ? "is-visible" : ""}>
      <Wrapper>
        <FormWrapper>
          <ContactMe>Contact</ContactMe>
          <Line></Line>
          <Form action={sendEmailAction}>
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

