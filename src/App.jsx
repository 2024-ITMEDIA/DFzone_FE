import React, { useState, useEffect } from "react";
import { Routes, Route, useLocation } from "react-router-dom";
import "./App.css";
import Main from "./pages/Main";
import Invite from "./pages/Invite";
import Info from "./pages/Info";
import ProjectList from "./pages/ProjectList";
import ProjectDetail from "./pages/ProjectDetail";
import Map from "./pages/Map";
import Guest from "./pages/Guest";
import None from "./pages/None";
import Footer from "./components/Footer";
import Header from "./components/Header";

function App() {
  const location = useLocation();
  const [showHeader, setShowHeader] = useState(false);
  const [showFooter, setShowFooter] = useState(false);
  const [projectId, setProjectId] = useState(null);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [location.pathname]);

  useEffect(() => {
    const currentPath = location.pathname;

    setShowHeader(currentPath !== "/invite" && currentPath !== "/");

    setShowFooter(currentPath !== "/invite");
  }, [location.pathname]);

  return (
    <div className="App">
      {showHeader && <Header projectId={projectId} />}
      <Routes>
        <Route exact path="/" element={<Main />} />
        <Route exact path="/invite" element={<Invite projectId={projectId} />} />
        <Route exact path="/info" element={<Info />} />
        <Route exact path="/project" element={<ProjectList projectId={projectId} />} />
        <Route exact path="/project/:id" element={<ProjectDetail setProjectId={setProjectId} />} />
        <Route exact path="/map" element={<Map />} />
        <Route exact path="/guestbook" element={<Guest />} />
        <Route exact path="/*" element={<None />} />
      </Routes>
      {showFooter && <Footer type="default" />}
    </div>
  );
}

export default App;
