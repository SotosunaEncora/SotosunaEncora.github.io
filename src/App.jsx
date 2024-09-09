import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './components/Home';
import BlogPost1 from './components/blogs/BlogPost1';
import BlogPost2 from './components/blogs/BlogPost2';
import BlogPost3 from './components/blogs/BlogPost3';
import BlogPost4 from './components/blogs/BlogPost4';
import BlogPost5 from './components/blogs/BlogPost5';
import BlogPost6 from './components/blogs/BlogPost6';
import BlogPost7 from './components/blogs/BlogPost7';
import BlogPost8 from './components/blogs/BlogPost8';
import TechBlogPost1 from './components/tech_logs/TechBlogPost1';
import TechBlogPost2 from './components/tech_logs/TechBlogPost2';
import TechBlogPost3 from './components/tech_logs/TechBlogPost3';
import TechBlogPost4 from './components/tech_logs/TechBlogPost4';

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/blog-post-1" element={<BlogPost1 />} />
        <Route path="/blog-post-2" element={<BlogPost2 />} />
        <Route path="/blog-post-3" element={<BlogPost3 />} />
        <Route path="/blog-post-4" element={<BlogPost4 />} />
        <Route path="/blog-post-5" element={<BlogPost5 />} />
        <Route path="/blog-post-6" element={<BlogPost6 />} />
        <Route path="/blog-post-7" element={<BlogPost7 />} />
        <Route path="/blog-post-8" element={<BlogPost8 />} />
        <Route path="/tech-log-post-1" element={<TechBlogPost1 />} />
        <Route path="/tech-log-post-2" element={<TechBlogPost2 />} />
        <Route path="/tech-log-post-3" element={<TechBlogPost3 />} />
        <Route path="/tech-log-post-4" element={<TechBlogPost4 />} />
      </Routes>
    </Router>
  );
};

export default App;
