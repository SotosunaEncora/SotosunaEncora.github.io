import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './components/Home';
import BlogPost1 from './components/blogs/BlogPost1';
import BlogPost2 from './components/blogs/BlogPost2';
import BlogPost3 from './components/blogs/BlogPost3';
import TechBlogPost1 from './components/tech_blogs/TechBlogPost1';
import TechBlogPost2 from './components/tech_blogs/TechBlogPost2';

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/blog-post-1" element={<BlogPost1 />} />
        <Route path="/blog-post-2" element={<BlogPost2 />} />
        <Route path="/blog-post-3" element={<BlogPost3 />} />
        <Route path="/tech-blog-post-1" element={<TechBlogPost1 />} />
        <Route path="/tech-blog-post-2" element={<TechBlogPost2 />} />
      </Routes>
    </Router>
  );
};

export default App;
