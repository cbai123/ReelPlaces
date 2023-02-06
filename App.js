import Home from './components/Home';
import MovieInfo from './components/movieinfo';
import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

export default function App() {
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