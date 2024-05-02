import React, { useState } from "react";
import "./home.css";
import { Link } from "react-router-dom";
import Navbar from "../../components/navbar/Navbar";
import SearchBar from "../../components/SearchBar/SearchBar";

const Home = () => {

  const [searchQuery, setSearchQuery] = useState("");

  const handleSearch = (query) => {
   
    console.log("Searching for:", query);
    setSearchQuery(query);
  };

  return (
    <div className="home">
      <SearchBar onSearch={handleSearch} />
      <Navbar />
      
      <h1>Proiecte Colective 2024</h1>
      <Link to="/about">Frontend</Link>
    </div>
  );
};

export default Home;
