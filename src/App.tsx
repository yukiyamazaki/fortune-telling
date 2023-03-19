import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import InputPage from './components/InputPage';
import ResultPage from './components/ResultPage';
import NotFoundPage from './components/NotFoundPage';
import './App.css';

function App() {
  return (
    <Router>
      <div className="App">
        <Routes>
          <Route path="/" Component={InputPage} />
          <Route path="/result" Component={ResultPage} />
          <Route Component={NotFoundPage} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
