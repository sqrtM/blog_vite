import React from 'react'
import ReactDOM from 'react-dom/client'
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Layout from "./pages/Layout";
import Home from "./pages/Home";
import BlogPostPage  from './components/BlogPostPage';

import './main.scss';
import Blog from './pages/Blog';
import Contact from './pages/Contact';
import NewPost from './pages/NewPost';
import EditBlogPost from './components/EditBlogPost';
import Projects  from './pages/Projects';

// TODO: turn the {title, author, date, comments, body} field of both the edit and create pages into a single component.

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path="/*" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="blog" element={<Blog />} />
          <Route path="blog/new_post" element={<NewPost />} />
          <Route path="contact" element={<Contact />} />
          <Route path="projects" element={<Projects />} />
          <Route path="post/:postID" element={<BlogPostPage />}/>
          <Route path="post/:postID/edit" element={<EditBlogPost />}/>
        </Route>
      </Routes>
    </BrowserRouter>
  </React.StrictMode>,
)
