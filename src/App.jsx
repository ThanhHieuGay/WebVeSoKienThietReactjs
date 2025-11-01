// src/App.jsx

import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import Prediction from './pages/Prediction';
import Schedule from './pages/Schedule';
import Buy from './pages/Buy';
import News from './pages/News';
import NewsDetail from './pages/NewsDetail';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/prediction" element={<Prediction />} />
        <Route path="/schedule" element={<Schedule />} />
        <Route path="/buy" element={<Buy />} />
        <Route path="/news" element={<News />} />
        <Route path="/news-detail/:id" element={<NewsDetail />} />
      </Routes>
    </Router>
  );
}

export default App;