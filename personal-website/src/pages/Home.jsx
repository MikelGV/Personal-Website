import React from 'react'
import TopBar from '../components/topBar/TopBar'
import SideBar from '../components/sideBar/SideBar'
import Footer from '../components/footer/Footer'
import Landing from '../components/landing/Landing'


const Home = () => {
  return (
    <div>
      <TopBar/>
      <Landing/>
      <SideBar/>
      <Footer/>
    </div>
  )
}

export default Home