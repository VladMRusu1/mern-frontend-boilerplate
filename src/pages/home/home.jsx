import React from "react";
import "./home.css";
import { Link } from "react-router-dom";
import Navbar from "../components/Navbar";


const Home = () => {
  return (
    <div className="home">
      <Navbar />
      <h1>Proiecte Colective 2024</h1>
      <Link to="/about">Frontend</Link>
    </div>
  );
};

export default Home;
