import { Outlet, Link } from "react-router-dom";
import './Layout.scss';

const Layout = () => {
  return (
    <>
      <nav className="navbar">
        <div>
          <Link className="navbar_links" to="/">Home</Link>
        </div>
        <div>
          <Link className="navbar_links" to="/blogs">Blogs</Link>
        </div>
        <div>
          <Link className="navbar_links" to="/contact">Contact</Link>
        </div>
      </nav>

      <div className="page_content">
        <Outlet />
      </div>
    </>
  )
};

export default Layout;