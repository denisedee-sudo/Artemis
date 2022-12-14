import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
// Bootstrap CSS
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min";
import "./sass/main.scss";
import {
  Navbar,
  Footer,
  Modals,
  // Carousel,
  Home,
  About,
  Articles,
  Booking,
  Admin
} from "./components/forExport";
import reportWebVitals from './reportWebVitals';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <Router>
  <Navbar></Navbar>
  <br /><br />
    <Routes>
      <Route path="/Artemis" element={<Home />} />
      <Route path="/Artemis/about" element={<About />} />
      <Route path="/Artemis/articles" element={<Articles />} />
      <Route path="/Artemis/booking" element={<Booking />} />
      <Route path="/Artemis/admin" element={<Admin />} />
    </Routes>
    <Footer></Footer>
    <Modals></Modals>
  </Router>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
