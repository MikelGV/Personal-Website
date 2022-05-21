import React from 'react'
import Footer from '../components/footer/Footer'
import Landing from '../components/landing/Landing'
import About from '../components/about/About'
import Experience from '../components/experience/Experience'
import Work from '../components/work/Work'
import Contact from '../components/contact/Contact'
import styled from 'styled-components'

const Container = styled.div`
  flex: 4;
`;

const Home = () => {
  return (
    <Container>
      <Landing/>
      <About/>
      <Experience/>
      <Work/>
      <Contact/>
      <Footer/>
    </Container>
    
  )
}

export default Home