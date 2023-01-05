import { Outlet, Link } from "react-router-dom";
import './styles/Layout.scss';

/*
make a cute circle animation which encircles whichever page you're on. 
like, it scrolls over to the place you are smoothly, so it's a nice
animation and also shows which page you're on. 
*/

export default function Layout() {
  return (
    <>
      <nav className="navbar">
        <div>
          <Link className="navbar_links" to="/">home</Link>
        </div>
        <div>
          <Link className="navbar_links" to="/blog">blog</Link>
        </div>
        <div>
          <Link className="navbar_links" to="/projects">projects</Link>
        </div>
        <div>
          <Link className="navbar_links" to="/contact">contact</Link>
        </div>
        <div>
          <a className="navbar_links" href="https://drive.google.com/file/d/1cKWYhJW3_847nFsVwQfgMyMF9w6Y4gIC/view?usp=sharing">CV</a>
        </div>
      </nav>

      <div className="page_content">
        <Outlet />
      </div>
    </>
  )
};
