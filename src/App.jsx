import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './components/Home';
import BlogPost1 from './components/blogs/BlogPost1';
import BlogPost2 from './components/blogs/BlogPost2';
import BlogPost3 from './components/blogs/BlogPost3';
import BlogPost4 from './components/blogs/BlogPost4';
import TechBlogPost1 from './components/tech_logs/TechBlogPost1';
import TechBlogPost2 from './components/tech_logs/TechBlogPost2';
import TechBlogPost3 from './components/tech_logs/TechBlogPost3';

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/blog-post-1" element={<BlogPost1 />} />
        <Route path="/blog-post-2" element={<BlogPost2 />} />
        <Route path="/blog-post-3" element={<BlogPost3 />} />
        <Route path="/blog-post-4" element={<BlogPost4 />} />
        <Route path="/tech-log-post-1" element={<TechBlogPost1 />} />
        <Route path="/tech-log-post-2" element={<TechBlogPost2 />} />
        <Route path="/tech-log-post-3" element={<TechBlogPost3 />} />
      </Routes>
    </Router>
  );
};

export default App;
