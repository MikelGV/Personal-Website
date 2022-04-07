import React from 'react'
import TopBar from '../components/topBar/TopBar'
import SideBar from '../components/sideBar/SideBar'
import Footer from '../components/footer/Footer'
import Landing from '../components/landing/Landing'
import About from '../components/about/About'
import Experience from '../components/experience/Experience'
import Work from '../components/work/Work'
import Contact from '../components/contact/Contact'


const Home = () => {
  return (
    <div>
      <Landing/>
      <About/>
      <Experience/>
      <Work/>
      <Contact/>
    </div>
  )
}

export default Home