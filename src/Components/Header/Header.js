import { Link } from "react-router-dom";
import styles from "./header.module.css";
function Header() {
  return (
    <>
      <div className={styles.headerName}>
        <Link to="/">Nuvem Shop</Link>
      </div>
      <div className={styles.headerNav}>
        <Link to="/new">Add new</Link>
      </div>
    </>
  );
}
export default Header;
