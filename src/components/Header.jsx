import { Link } from "react-router-dom";
import styles from "./header.module.css";

function Header() {
  return (
    <header className={styles.header}>
      <Link to="/login"> Login</Link>
    </header>
  );
}

export default Header;
