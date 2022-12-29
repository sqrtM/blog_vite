import { Outlet, Link } from "react-router-dom";
import './Layout.scss';

const Layout = () => {
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
          <Link className="navbar_links" to="/contact">contact</Link>
        </div>
      </nav>

      <div className="page_content">
        <Outlet />
      </div>
    </>
  )
};

export default Layout;