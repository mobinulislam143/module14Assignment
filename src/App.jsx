import { BrowserRouter, Route, Routes } from "react-router-dom"
import HomePage from "./Pages/HomePage"
import ProjectPage from "./Pages/ProjectPage"
import ServicePage from "./Pages/ServicePage"
import TeamPage from "./Pages/TeamPage"
import TestomonialPage from "./Pages/TestomonialPage"
import AppNavbar from "./components/AppNavbar"
import Footer from "./components/Footer"
import SubscribeArea from "./components/SubscribeArea"


function App() {
 
  return (
    <>
     <BrowserRouter basename="/">
      <AppNavbar/>
        <Routes>
          <Route path="/" element={<HomePage/>} />
          <Route path="/team" element={<TeamPage/>} />
          <Route path="/service" element={<ServicePage/>} />
          <Route path="/project" element={<ProjectPage/>} />
          <Route path="/testomonial" element={<TestomonialPage/>} />
        </Routes>
        <SubscribeArea/>
        <Footer/>
     </BrowserRouter>
      
    </>
  )
}

export default App
