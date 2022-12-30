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


ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path="/*" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="blog" element={<Blog />} />
          <Route path="blog/new_post" element={<NewPost />} />
          <Route path="contact" element={<Contact />} />
          <Route path="post/:postID" element={<BlogPostPage />}/>
          <Route path="post/:postID/edit" element={<EditBlogPost />}/>
        </Route>
      </Routes>
    </BrowserRouter>
  </React.StrictMode>,
)
