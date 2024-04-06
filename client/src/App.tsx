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
// import Watch from "./pages/Watch/Watch";

// import { WalletSelector } from "@aptos-labs/wallet-adapter-ant-design";
import "@aptos-labs/wallet-adapter-ant-design/dist/index.css";
import { useWallet } from "@aptos-labs/wallet-adapter-react";

// import { Layout, Row, Col } from "antd";
import UploadPage from "./pages/UploadPage";

function App() {
  const { account } = useWallet();

  return (
    <>
      {/* <div>{address ?? "Loading address"}</div> */}
      <Router>
        <Navbar />
        <Routes>
          <Route path="/" element={<Homepage />} />
          <Route
            path="/dashboard"
            element={account != null ? <Dashboard /> : <Navigate to="/" />}
            // element={<Dashboard />}
          />
          <Route path="/discover" element={<Discover />}></Route>
          {/* <Route path="/watch" element={<Watch />}></Route> */}
          <Route path="/upload-images" element={<UploadPage />}></Route>
          <Route path="/available-nft/:id" element={<AvailableNFT />}></Route>
        </Routes>
      </Router>
      <Footer />
    </>
  );
}

export default App;
