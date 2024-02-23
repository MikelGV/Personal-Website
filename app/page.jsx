'use client'
import styled from "styled-components";
import LeftSideBar from "./components/sideBar/LeftSideBar";
import RightSidebar from "./components/sideBar/RightSidebar";
import TopBar from "./components/topBar/TopBar";
import HomePage from "./home/Home";


const Container = styled.div`
  display: flex;
  margin-top: 10px;
`;

export default function Home() {
  return (
    <>
      <TopBar/>
      <Container>
        <LeftSideBar />
        <HomePage/>
        <RightSidebar/>
      </Container>
    </>
  );
}
