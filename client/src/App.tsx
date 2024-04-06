import React from "react";
import logo from "./logo.svg";
import "./App.css";

import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import {
  Route,
  BrowserRouter as Router,
  Routes,
  Navigate,
} from "react-router-dom";
import Dashboard from "./pages/Dashboard";
import Homepage from "./pages/Homepage";
import Discover from "./pages/Discover";
import AvailableNFT from "./pages/AvailableNFT";

import { Layout, Row, Col } from "antd";

function App() {
  return (
    <>
      {/* <div>{address ?? "Loading address"}</div> */}
      <Router>
        <Navbar />
        <Routes>
          <Route path="/" element={<Homepage />} />
          <Route
            path="/dashboard"
            // element={isConnected ? <Dashboard /> : <Navigate to="/" />}
            element={<Dashboard />}
          />
          <Route path="/discover" element={<Discover />}></Route>
          <Route path="/available-nft/:id" element={<AvailableNFT />}></Route>
        </Routes>
      </Router>
      <Footer />
    </>
  );
}

export default App;
