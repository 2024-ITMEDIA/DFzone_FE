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

  useEffect(() => {
    const currentPath = location.pathname;

    setShowHeader(currentPath !== "/invite" && currentPath !== "/");

    setShowFooter(currentPath !== "/invite");
  }, [location.pathname]);

  return (
    <div className="App">
      {showHeader && <Header />}
      <Routes>
        <Route exact path="/" element={<Main />} />
        <Route exact path="/invite" element={<Invite />} />
        <Route exact path="/info" element={<Info />} />
        <Route exact path="/project" element={<ProjectList />} />
        <Route exact path="/project/:id" element={<ProjectDetail />} />
        <Route exact path="/map" element={<Map />} />
        <Route exact path="/guestbook" element={<Guest />} />
        <Route exact path="/*" element={<None />} />
      </Routes>
      {showFooter && <Footer type="default" />}
    </div>
  );
}

export default App;
