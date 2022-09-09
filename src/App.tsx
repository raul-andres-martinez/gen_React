import React from "react";
import Navbar from "./components/static/navbar/Navbar";
import Footer from "./components/static/footer/Footer";
import Home from "./pages/home/Home"
import Login from "./pages/login/Login"
import { BrowserRouter as Router, Route, Routes} from "react-router-dom";
import { Grid } from "@material-ui/core";
import "./App.css";
import SignUser from "./pages/register/SignUser";

function App() {
  return (
    <Router>
      <div style={{ minHeight: '100vh' }}>
      <Navbar />
        <Routes>
            <Route path='/login' element={<Login />} />
            <Route path='/home' element={<Home />} />
            <Route path='/cadastro' element={<SignUser />} />
        </Routes>
        </div>
      <Footer />
    </Router>
  );
}

export default App;
