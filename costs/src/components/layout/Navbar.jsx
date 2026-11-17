import { Link } from 'react-router-dom';
import Container from './Container';
import styles from './Navbar.module.css';
import logo from '../../img/costs_logo.png';

function Navbar() {
    return(
        <nav className={styles.navbar}>
            <div className={styles.logo}>
                <img src={logo} alt="Costs Logo" />
            </div>
            <ul className={styles.list}>
                <li><Link to="/">Home</Link></li>
                <li><Link to="/contact">Contact</Link></li>
                <li><Link to="/company">Company</Link></li>
                <li><Link to="/newproject">New Project</Link></li>
            </ul>
        </nav>  
    )
}

export default Navbar;  