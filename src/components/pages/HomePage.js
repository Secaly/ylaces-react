import React from 'react';
import { Link } from "react-router-dom";
import "./homePage.css"

const HomePage = () => (
  <div className="HomePage">
    <h1>Home Page</h1>
    <Link to="/login">Login</Link>
  </div>
)

export default HomePage;
