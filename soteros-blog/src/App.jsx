import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './components/Home';
import BlogPost1 from './components/blogs/BlogPost1';
import BlogPost2 from './components/blogs/BlogPost2';

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/soteros-blog" element={<Home />} />
        <Route path="/post1" element={<BlogPost1 />} />
        <Route path="/post2" element={<BlogPost2 />} />
      </Routes>
    </Router>
  );
};

export default App;
