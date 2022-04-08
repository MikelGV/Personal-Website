import {BrowserRouter, Route, Routes} from "react-router-dom";
import styled from "styled-components";
import RightSidebar from "./components/sideBar/RightSidebar";
import LeftSideBar from "./components/sideBar/LeftSideBar";
import TopBar from "./components/topBar/TopBar";
import Home from "./pages/Home";

const Container = styled.div`
  display: flex;
  margin-top: 10px;
`;

function App() {
  return (
    <BrowserRouter>
      <TopBar/>
      <Container>
        <LeftSideBar />
        <Routes>
          <Route path="/" element={<Home />} />
        </Routes>
        <RightSidebar/>
      </Container>
    </BrowserRouter>
  );
}

export default App;