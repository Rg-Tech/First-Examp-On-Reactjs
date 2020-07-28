import React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom'
import './App.css';
import Header from './component/header/Header'
import Footer from './component/footer/Footer'
import Routes from './Routes';


function App() {
  return (
    <Router>
      <Header />
      <div>
      <Routes />
      </div>
      <Footer />
    </Router>
  );
}

export default App;
