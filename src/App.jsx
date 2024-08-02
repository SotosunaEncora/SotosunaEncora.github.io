import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './components/Home';
import BlogPost1 from './components/blogs/BlogPost1';
import BlogPost2 from './components/blogs/BlogPost2';

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/blog-post-1" element={<BlogPost1 />} />
        <Route path="/blog-post-2" element={<BlogPost2 />} />
      </Routes>
    </Router>
  );
};

export default App;
