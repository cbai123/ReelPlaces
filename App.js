import Home from './components/Home';
import MovieInfo from './components/movieinfo';
import React, { useEffect } from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import WebFont from 'webfontloader';

export default function App() {

  useEffect(() => {
    WebFont.load({
      google: {
        families: ['Roboto']
      }
    });
   }, []);

  return ( 
    <main>
      <Router>
        <Routes>
            <Route path="/" element={<Home/>} />
            <Route path="/movieinfo" element={<MovieInfo/>} />
        </Routes>
      </Router>
    </main>
  );
};