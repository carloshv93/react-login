import { Link } from "react-router-dom";
import styles from "./header.module.css";

function Header() {
  const isLogged = false;
  return (
    <header className={styles.header}>
      {isLogged ? (
        <Link to="/logout">Logout</Link>
      ) : (
        <Link to="/login">Login</Link>
      )}
    </header>
  );
}

export default Header;
