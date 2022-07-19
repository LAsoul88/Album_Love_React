import { Link } from 'react-router-dom';
import './NavBar.scss';

const NavBar = () => {
  return (
    <div className="NavBar">
        <div className="NavBar_brand">
          <Link 
            to="/albums"
            className="NavBar_brandLink brandLink___noDec" 
          >
            Album Love
          </Link>
        </div>
        <div className="NavBar_links">
          <ul className="NavBar_linkList">
            <li>
              <Link 
                to="/login"
                className="NavBar_link link___noDec"
              >
                Login
              </Link>
            </li>
            <li>
              <Link 
                to="/register"
                className="NavBar_link link___noDec"
              >
                Register
              </Link>
            </li>
          </ul>
        </div>
    </div>
  )
}

export default NavBar;