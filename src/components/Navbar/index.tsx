import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHome, faSearch } from "@fortawesome/free-solid-svg-icons";
import styles from "./Navbar.module.css";
import { Fragment } from "react/jsx-runtime";

const Navbar = () => {
  return (
    <Fragment>
      <header className={styles.nav}>
        <a href="#" className={styles.logo}>
          iMovies
        </a>
        <ul className={styles.nav_items}>
          <li>
            <a href="#">
              <FontAwesomeIcon icon={faHome} />
            </a>
          </li>
          <li>
            <a href="#">Adults</a>
          </li>
          <li>
            <a href="#">Kids</a>
          </li>
          <li>
            <a href="#">Trends</a>
          </li>
          <li>
            <a href="#">My List</a>
          </li>
        </ul>
        <div className={styles.nav_search}>
          <input type="text" placeholder="Search" />
          <FontAwesomeIcon icon={faSearch} className={styles.nav_search_icon} />
        </div>
      </header>
    </Fragment>
  );
};

export default Navbar;
