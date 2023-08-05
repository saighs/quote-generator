
import { Link } from 'react-router-dom';
import "./header.css";

function Header(){
  return (
    <nav>
      <ul>
        <li>
          <Link to="/">Home</Link>
        </li>
        <li>
          <Link to="/Login">Login</Link>
        </li>
      </ul>
    </nav>


  );
};


export default Header;

