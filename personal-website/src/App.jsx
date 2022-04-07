import {BrowserRouter, Route, Routes} from "react-router-dom";
import Footer from "./components/footer/Footer";
import SideBar from "./components/sideBar/SideBar";
import TopBar from "./components/topBar/TopBar";
import Home from "./pages/Home";
function App() {
  return (
    <BrowserRouter>
      <TopBar/>
      <Routes>
        <Route path="/" element={<Home />} />
      </Routes>
      <SideBar/>
      <Footer/>
    </BrowserRouter>
  );
}

export default App;