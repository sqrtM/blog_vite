import { Outlet, Link } from "react-router-dom";
import './styles/Layout.scss';

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
      </nav>

      <div className="page_content">
        <Outlet />
      </div>
    </>
  )
};
